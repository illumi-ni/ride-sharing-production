const mongoose = require('mongoose');
const validator = require('validator');

const Customer = mongoose.model('Customer', {
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: "Invalid email address" });
            }
        }
    },
    contact: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = Customer;