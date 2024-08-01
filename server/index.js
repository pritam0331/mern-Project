const express = require('express')
const app = express()
const port = 3001
const chalk = require('chalk')
require('./config/dbConn')
const user = require('./config/User')
const cors = require('cors')
const bodyparser = require('body-parser')
// const bcrypt = require('bcrypt')

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
    const { name, email, password } = req.body
    const saveData = new user({
        name: name,
        email: email,
        password: password
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