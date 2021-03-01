const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passwordHash = require('password-hash');

let User = require('./schemas/userSchema');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose Database Connection Established Successfully");
});

app.get('/', (req, res) => {
    res.status(200).send("Hello, World!")
});

/* 
*   => N/A
*   <= Array of all users / JSON [200]
*   <X Returns the error / JSON [400]
*/
app.get('/user', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* 
*   => username / String
*   <= New user created / JSON [200]
*   <X Returns the erro / JSON [400]
*/
app.post('/user', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = passwordHash.generate(req.body.password);
    const dob = req.body.dob;

    /*
    *   Returns 400 status along with an error message 
    *   if any of the required data is not present 
    */
    if ((firstname || lastname || email || password || dob) == (undefined || null)) {
        res.status(400).json('Error: Required Data Missing')
    }
    const newUser = new User({ firstname }, { lastname }, { email }, { password }, false, "{}", { dob });
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});


app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});