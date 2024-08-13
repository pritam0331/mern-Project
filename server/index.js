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
const google = require('./config/LoginWithGoogle')
const adminRoute = require('./router/admin-router')
const Contact = require('./config/Contact')
// const bcrypt = require('bcrypt')

app.use("/api/admin", adminRoute);

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
        res.status(201).json({ message: 'Blood acceptor data saved successfully' });
    } catch (error) {
        console.log(chalk.inverse.red(error))
        res.status(500).send({ message: 'Error occurred while saving data' })
    }
})

app.post('/blooddon', async (req, res) => {
    try {
        const { bloodtype, blooddonate, fname, lname, dob, contact, email, gender, donated} = req.body;
        const fullname = { fname, lname };

        if (!bloodtype || !fname || !lname || !dob || !contact || !email || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if donor already exists
        let donor = await BloodDonor.findOne({ email: email });

        if (donor) {
            // If donor exists, update their information
            donor.blooddonate += parseInt(blooddonate); // Add new donation amount
            donor.donated = donated; // Update donation status
            // Update other fields if needed
            donor.bloodtype = bloodtype;
            donor.fullname = fullname;
            donor.dob = dob;
            donor.contact = contact;
            donor.gender = gender;

            await donor.save();
            res.status(200).json({ message: 'Blood donor data updated successfully' });
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
            res.status(201).json({ message: 'Blood donor data saved successfully' });
        }
    } catch (error) {
        console.log(chalk.inverse.red(error));
        res.status(500).send({ message: 'Error occurred while saving data' });
    }
});

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

  app.post('/contact', async (req, res) => {
    try {
      const { firstname, lastname, email, phone, message } = req.body;
      const fullname = {firstname,lastname};
      const saveData = new Contact({
        fullname,
        email,
        phone,
        message,
      });
      await saveData.save();
      res.status(201).json({ alert: 'Contact form data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ alert: 'Error occurred while saving data' });
    }
  });