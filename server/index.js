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
const adminRoute = require('./router/admin-router')
const Contact = require('./config/Contact')
const nodemailer = require('nodemailer');
// const bcrypt = require('bcrypt')

app.use("/api/admin", adminRoute);

app.use(cors())

app.use(express.json())

app.use(bodyparser.json())

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red(err));
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'RaaktDaann@gmail.com',
        pass: 'txiw unyb rbrk xvhx',
    }
});

app.post('/', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = new user({ name, email, password, role });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(chalk.inverse.red('Error saving user:', error));
        res.status(500).json({ message: 'Error saving user data' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await user.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.status(200).send('success');
            } else {
                res.status(400).send('password incorrect');
            }
        } else {
            res.status(400).send('you have to register before login');
        }
    } catch (error) {
        console.log(chalk.inverse.red('Error during login:', error));
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

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
        return res.status(400).json({ message: 'Requested amount of blood exceeds available quantity' });
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
        const { bloodtype, blooddonate, fname, lname, dob, contact, email, gender, donated, extra } = req.body;
        const fullname = { fname, lname };

        if (!bloodtype || !fname || !lname || !dob || !contact || !email || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

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

            donor.blooddonate += parseInt(blooddonate);
            donor.donated = donated;
            donor.bloodtype = bloodtype;
            donor.fullname = fullname;
            donor.dob = dob;
            donor.contact = contact;
            donor.gender = gender;

            await donor.save();
            res.status(200).json({ message: 'Blood donor data updated successfully' });
        } else {
            const newDonor = new BloodDonor({
                bloodtype,
                blooddonate: parseInt(blooddonate),
                fullname,
                dob,
                contact,
                email,
                gender,
                donated,
                extra,
            });
            await newDonor.save();
            responseMessage += 'Blood donor data saved successfully.';
            console.log(responseMessage)
            res.status(200).send({ message: responseMessage });
        }
    } catch (error) {
        console.log(chalk.inverse.red('Error saving blood donor data:', error));
        res.status(500).json({ message: 'Error occurred while saving data' });
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
        const mailOptions = {
            from: 'RaaktDaann@gmail.com',
            to: email,
            subject: 'Your Appointment for Blood Test',
            text: `Dear ${fname} ${lname},

Thank you for booking your blood test with us. Here are the details of your appointment:

- **Full Name**: ${fname} ${lname}
- **Phone Number**: ${phno}
- **Preferred Appointment Date**: ${prefDate}
- **Preferred Appointment Time**: ${appTime}
- **Amount of Blood Test**: ₹250

We look forward to seeing you on the scheduled date. If you have any further questions or need to reschedule, feel free to reply to this email.

Best regards,
Rakt Daan Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending email:', error));
                return res.status(500).json({ alert: 'Data saved, but error occurred while sending email.' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ alert: 'Contact form data saved and email sent successfully' });
        });
    }
    catch(error){
        console.log(chalk.inverse.red(error))
        res.status(500).send({message:'Error occured while saving data'})
    }
});

app.post('/contact', async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;
        const { firstname, lastname } = fullname;

        const newContact = new Contact({ fullname, email, phone, message });
        await newContact.save();

        const mailOptions = {
            from: 'RaaktDaann@gmail.com',
            to: email,
            subject: 'Welcome to Rakt Daan',
            text: `Dear ${firstname} ${lastname},

\n\nThank you for getting in touch with us. We appreciate your effort and look forward to helping those in need.

Best regards,
Rakt Daan Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending email:', error));
                return res.status(500).json({ alert: 'Data saved, but error occurred while sending email.' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ alert: 'Contact form data saved and email sent successfully' });
        });

    } catch (error) {
        console.log(chalk.inverse.red('Error saving contact form data:', error));
        res.status(500).json({ alert: 'Error occurred while saving data' });
    }
});

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
