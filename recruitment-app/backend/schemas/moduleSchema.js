const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const moduleSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    number: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    learningPoints: {
        type: Array,
        required: true
    },
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;