const express = require('express');
const app = express();
const port = 2003;
const chalk = require('chalk');
require('./config/dbConn');
const User = require('./config/User');
const cors = require('cors');
const bodyParser = require('body-parser');
const BloodAcc = require('./config/BloodAccepter');
const BloodDonor = require('./config/BloodDonor');
const BloodTest = require('./config/BloodTest');
const Contact = require('./config/Contact');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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
        pass: 'vsmi saww yflw tchh',  // Consider storing this in an environment variable for security
    }
});

app.post('/', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = new User({ name, email, password, role });
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
        const user = await User.findOne({ email });
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
        const fullname = { fname, lname };
        const newBloodAcc = new BloodAcc({ bloodtype, bloodneed, fullname, dob, gender, phoneno, email });
        await newBloodAcc.save();
        res.status(201).json({ message: 'Blood acceptor data saved successfully' });
    } catch (error) {
        console.log(chalk.inverse.red('Error saving blood acceptor data:', error));
        res.status(500).json({ message: 'Error occurred while saving data' });
    }
});

app.post('/blooddon', async (req, res) => {
    try {
        const { bloodtype, blooddonate, fname, lname, dob, contact, email, gender, donated, extra } = req.body;
        const fullname = { fname, lname };

        if (!bloodtype || !fname || !lname || !dob || !contact || !email || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let donor = await BloodDonor.findOne({ email: email });

        if (donor) {
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
            res.status(201).json({ message: 'Blood donor data saved successfully' });
        }
    } catch (error) {
        console.log(chalk.inverse.red('Error saving blood donor data:', error));
        res.status(500).json({ message: 'Error occurred while saving data' });
    }
});

app.post('/bloodtest', async (req, res) => {
    try {
        const { fname, lname, email, phno, prefDate, appTime, addComment } = req.body;
        const fullname = { fname, lname };
        const newBloodTest = new BloodTest({ fullname, email, phno, prefDate, appTime, addComment });
        await newBloodTest.save();
        res.status(201).json({ message: 'Blood test data saved successfully' });
    } catch (error) {
        console.log(chalk.inverse.red('Error saving blood test data:', error));
        res.status(500).json({ message: 'Error occurred while saving data' });
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
    try {
        let user = await User.findOne({ googleId });
        if (!user) {
            user = new User({ googleId, email, name, profilePic });
            await user.save();
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(chalk.inverse.red('Error during Google login:', error));
        res.status(500).json({ message: 'Error occurred during Google login' });
    }
});
