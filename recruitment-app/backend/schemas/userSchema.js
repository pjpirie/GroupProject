const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true
    },
    paidAccess: {
        type: Boolean,
        required: true
    },
    modulesCompleted: {
        type: String,
        required: false
    },
    dob: {
        type: String,
        required: true,
        unique: false
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;