const mongoose = require('mongoose');

const Driver = mongoose.model('Driver', {
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    citizenship: {
        type: String,
        required: true

    },
    licence: {
        type: String
    },
    dob: {
        type: String,
        required: true
    },
    vechileNo: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
});

module.exports = Driver;