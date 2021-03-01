const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
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
        required: true,
        unique: false
    },
    paidAccess: {
        type: Boolean,
        required: true
    },
    modulesCompleted: {
        type: String,
        required: false,
        unique: false
    },
    dob: {
        type: Date,
        required: true,
        unique: false
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;