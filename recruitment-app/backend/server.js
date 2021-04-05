const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const ejwt = require('express-jwt');
const cookieParser = require('cookie-parser');

let User = require('./schemas/userSchema');
let Module = require('./schemas/moduleSchema');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());
app.use(cookieParser(jwtSecret));

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
*   <X Returns the error / JSON [400]
*/
app.post('/user/register', (req, res) => {
    const firstname = req.body.FirstName;
    const lastname = req.body.LastName;
    const email = req.body.Email;
    const password = passwordHash.generate(req.body.Password);
    const dob = req.body.DateOfBirth;

    /*
    *   Returns 400 status along with an error message 
    *   if any of the required data is not present 
    */
    if ((firstname || lastname || email || password || dob) == (undefined || null)) {
        res.status(400).json('Error: Required Data Missing')
        console.log("Required Data Missing")
    }
    console.table([firstname, lastname, email, password, dob]);
    const newUser = new User({ firstName: firstname, lastName: lastname, email: email, password: password, paidAccess: false, modulesCompleted: "{}", dob: dob });
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => {
            res.status(400).json('Error: ' + err)
            console.log('Error: ' + err);
        });
});

app.post('/user/login', (req, res) => {
    const email = req.body.Email;
    const password = req.body.Password;

    /*
    *   Returns 400 status along with an error message 
    *   if any of the required data is not present 
    */
    if ((email || password) == (undefined || null)) {
        res.status(400).json('Error: Required Data Missing')
        console.log("Required Data Missing")
    }
    User.findOne({ email: email }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            if (passwordHash.verify(password, data.password)) {
                // console.log(jwtSecret);
                const token = jwt.sign(JSON.stringify(data._id), jwtSecret);
                // const token = "Placeholder";
                res.cookie('token', token, { httpOnly: true });
                res.cookie('logged_in', true, { httpOnly: true });
                res.cookie('User_Id', data.email, { httpOnly: true });
                let user = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    paidAccess: data.paidAccess,
                    modulesCompleted: data.modulesCompleted,
                    dob: data.dob
                }
                res.json({ token: token, user: user})
            } else {
                res.json("Error: Incorrect Password");
            }
        }
    });
});

app.post('/user/check', (req, res) => {
    console.log("[Server] Checking Email: " + req.body.Email);
    User.exists({ email: req.body.Email }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.post('/user/auth', (req, res) => {
    console.log("[Server] Checking Token");
    console.log(req.headers.cookie);
    if(req.headers.cookie == undefined){
        console.log("Cookie Undefined");
        res.json({tokenValid: false});
    }else{
        let UserHeaders = req.headers.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
        if(UserHeaders.token != (null || undefined)){
            if(jwt.verify(UserHeaders.token, jwtSecret)){
                console.log(`Token Valid ${UserHeaders.User_Id}`);
                let email = UserHeaders.User_Id;
                console.log(email);
                User.findOne({ email: email }, function (err, data){
                    if (err) {
                        res.send(err);
                    } else {
                        let user = {
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: data.email,
                            paidAccess: data.paidAccess,
                            modulesCompleted: data.modulesCompleted,
                            dob: data.dob
                        }
                        res.json({tokenValid: true, user: user});
                        
                    }
                });
                // User.findById(UserHeaders.UserId, function (err, data) {
                //     if (err) {
                //         res.send(err);
                //     } else {
                //         let user = {
                //             firstName: data.firstName,
                //             lastName: data.lastName,
                //                email: data.email,
                //             paidAccess: data.paidAccess,
                //             modulesCompleted: data.modulesCompleted,
                //             dob: data.dob
                //         }
                //         res.json({tokenValid: true, user: user});
                        
                //     }
                // });
                // res.json({tokenValid: true});
            }else{
                console.log("Token Invalid");
                res.json({tokenValid: false});
            }
        }else{
            console.log("Token Undefined");
            res.json({tokenValid: false});
        }
    }   
});

app.post('/user/logout', (req, res) => {
    console.log("[Server] Logging out: ");
    res.clearCookie('token', { httpOnly: true });
    res.status(200).send("Cleared token");
});

app.get('/module', (req, res) => {
    Module.find()
        .then(modules => res.json(modules))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/module/:moduleNumber', (req, res) => {
    console.log("[Server] Getting Module #" + req.params.moduleNumber);
    Module.findOne({ number: req.params.moduleNumber }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.post('/module/add', (req, res) => {
    console.log("[Server] Adding Module ");
    const newModule = new Module({ 
        title: req.body.moduleTitle, 
        number: req.body.number, 
        description: req.body.moduleDescription, 
        learningPoints: req.body.learningPoints});
        newModule.save()
        .then(() => res.json('Module Added'))
        .catch(err => {
            res.status(400).json('Error: ' + err)
            console.log('Error: ' + err);
        });
});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
