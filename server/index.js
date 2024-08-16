const express = require('express')
const app = express()
const port = 3001
const chalk = require('chalk')
require('./config/dbConn')
const user = require('./config/User')
const cors = require('cors')
const bodyparser = require('body-parser')
const BloodAcc = require('./config/BloodAccepter')
const BloodDonor = require('./config/BloodDonor')
const BloodTest = require('./config/BloodTest')
const TotalBlood = require('./config/TotalBlood')
const google = require('./config/LoginWithGoogle')
const bcrypt = require('bcrypt')

app.use(cors())

app.use(express.json())

app.use(bodyparser.json())

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red(err))
    }
    else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`))
    }
})

app.post('/', async (req, res) => {
    const { name, email, password, role } = req.body
    const saveData = new user({
        name: name,
        email: email,
        password: password,
        role: role
    })
    try {
        const save = await saveData.save()
        res.send(save)
    } catch (error) {
        console.log(chalk.inverse.red(error))
    }
})

// Route for email check
//   app.post('/check-email', async (req, res) => {
//     const { email } = req.body;

//     try {
//       const user = await user.findOne({ email });

//       if (user) {
//         res.status(200).send({ message: 'Email found, proceed to password' });
//       } else {
//         res.status(400).send({ message: 'Invalid email' });
//       }
//     } catch (error) {
//       res.status(500).send({ message: 'An error occurred', error });
//     }
//   });

//   // Route for password check
//   app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//       const user = await user.findOne({ email });

//       if (user) {
//         if (user.password === password) {
//           res.status(200).send({ message: 'Successfully logged in' });
//         } else {
//           res.status(400).send({ message: 'Incorrect password' });
//         }
//       } else {
//         res.status(400).send({ message: 'Invalid email' });
//       }
//     } catch (error) {
//       res.status(500).send({ message: 'An error occurred', error });
//     }
//   });

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    user.findOne({ email: email })
    .then(user =>{
        if(user){
            if(user.password === password)
            {
                res.send('success')
            }
            else{
                res.send('password incorrect')
               }   }
            else{
                res.send('you have to register before login')
            }
    })
})

app.post('/bloodacc', async (req, res) => {
    try {
    const { bloodtype, bloodneed, fname, lname, dob, gender, phoneno, email } = req.body;
    const fullname = {fname,lname};
    
    if (!bloodtype || !fname || !lname || !dob || !bloodneed || !email || !gender || !phoneno) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    let taker = await BloodAcc.findOne({ email: email });
    let bltype = await TotalBlood.findOne({ BloodType:bloodtype})
    let responseMessage = ''

    if (!bltype) {
        return res.status(404).json({ message: 'Blood type not found in our database' });
    }

    // Check if the requested amount is less than or equal to the available amount
    if (parseInt(bloodneed) > bltype.Quantity) {
        return res.status(400).json({ message: 'Requested amount exceeds available quantity' });
    }

    // Reduce the blood quantity in the TotalBlood collection
    const updatedQuantity = bltype.Quantity - parseInt(bloodneed);
    await TotalBlood.updateOne(
        { BloodType: bloodtype },
        { $set: { Quantity: updatedQuantity } }
    );

    if(taker){
        const updatedFields = {
            bloodneed: taker.bloodneed + parseInt(bloodneed),
        };

        await BloodAcc.updateOne({ email: email }, { $set: updatedFields });

        responseMessage += 'Blood accepter data updated successfully.';
    }else{
    const saveData = new BloodAcc({
        bloodtype,
        bloodneed,
        fullname,
        dob,
        gender,
        phoneno,
        email,
    });
        await saveData.save()
        responseMessage += 'Blood acceptor data saved successfully'
    }
    console.log(responseMessage)
    res.status(200).send({ message: responseMessage });
    } catch (error) {
        console.log(chalk.inverse.red(error))
        res.status(500).send({ message: 'Error occurred while saving data' })
    }
})

app.post('/blooddon', async (req, res) => {
    try {
        const { bloodtype, blooddonate, fname, lname, dob, contact, email, gender, donated } = req.body;
        const fullname = { fname, lname };

        if (!bloodtype || !fname || !lname || !dob || !contact || !email || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if donor already exists
        let donor = await BloodDonor.findOne({ email: email });

        // Check if blood type already exists
        let btype = await TotalBlood.findOne({ BloodType: bloodtype }) 

        let responseMessage = ''

        if(btype){
            const updatedFields = {
                Quantity: btype.Quantity + parseInt(blooddonate)
            }
            await TotalBlood.updateOne(
                { BloodType: bloodtype },
                { $inc: { Quantity: parseInt(blooddonate) } }
            );    
            await TotalBlood.updateOne({ BloodType:bloodtype }, { $set: updatedFields });        

            responseMessage += 'Blood Type data updated successfully. ';
        } else{
            const btype = new TotalBlood({
                BloodType: bloodtype,
                Quantity: parseInt(blooddonate)
            });
            await btype.save();
            responseMessage += 'Blood Quantity data saved successfully. ';
        }

        if (donor) {
            // If donor exists, update their information
            const updatedFields = {
                blooddonate: donor.blooddonate + parseInt(blooddonate),
                donated: true
            };

            await BloodDonor.updateOne({ email: email }, { $set: updatedFields });

            responseMessage += 'Blood donor data updated successfully.';
        } else {
            // If donor doesn't exist, create a new entry
            const newDonor = new BloodDonor({
                bloodtype,
                blooddonate: parseInt(blooddonate),
                fullname,
                dob,
                contact,
                email,
                gender,
                donated,
            });
            await newDonor.save();
            responseMessage += 'Blood donor data saved successfully.';
            console.log(responseMessage)
            res.status(200).send({ message: responseMessage });
        }
    } catch (error) {
        console.log(chalk.inverse.red(error));
        res.status(500).send({ message: 'Error occurred while saving data' });
    }
});



app.get('/blooddon', async (req, res) => {
    const { email } = req.query;
    try {
      const user = await BloodDonor.find({ email });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error checking user' });
    }
  })

app.post('/bloodtest',async(req,res)=>{
    try{
        const {fname,lname,email,phno,prefDate,appTime,addComment} = req.body
        const fullname = {fname,lname}
        const saveData = new BloodTest({
            fullname,email,phno,prefDate,appTime,addComment
        })
        await saveData.save()
        res.status(201).json({message:'Blood Test data save sucessfully'})
    }
    catch(error){
        console.log(chalk.inverse.red(error))
        res.status(500).send({message:'Error occured while saving data'})
    }
})


app.post('/api/google-login', async (req, res) => {
    const { googleId, email, name, profilePic } = req.body;
    let user = await google.findOne({ googleId });
    if (!user) {
      user = new google({ googleId, email, name, profilePic });
      await user.save();
    }
    res.status(200).json(user);
  });