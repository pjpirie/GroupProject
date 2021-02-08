const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    imgUrl: String,
    bio: String,
    authLevel: Number,
    contentAccess: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;