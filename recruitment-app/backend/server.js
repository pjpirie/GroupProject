const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

app.get('/user', (req,res) => {

});

app.get('/user/add/<name>', (req,res) => {

});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});