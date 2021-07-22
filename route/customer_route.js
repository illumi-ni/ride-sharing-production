const express = require('express');
const router = express.Router();
const Customer = require('../model/customer_model');
const jwt = require('jsonwebtoken');
const otp = require('./OTPverify');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

//Customer Sign up
router.post('/customer/insert', [
    check('fullname', "Please enter your name").not().isEmpty(),
    check('email', "Invalid Email address").isEmail(),
    check('contact', "Contact is required").not().isEmpty(),
    check('gender', "Please choose a gender").not().isEmpty()
], function (req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const contact = req.body.contact;
        const gender = req.body.gender;

        const CustomerData = new Customer({ fullname: fullname, email: email, contact: contact, gender: gender });
        CustomerData.save().then(function (result) {
            res.status(201).json({ success: true, message: "Customer Registered!!" });
        }).catch(function (err) {
            res.status(500).json({ success: false, message: err });
        });

    }
    else {
        res.status(400).json(errors.array());
    }
});

router.post('/sendotp', function (req, res) {
    email = req.body.email;

    const { success, error, otp1 } = otp.sendOTP(email);

    if (success == true) {
        res.status(201).json({ success: true, message: "OTP sent!", otp: otp1 });
    }
    else {
        res.status(500).json({ success: false, message: error });
    }
});

router.post('/verifyotp', function (req, res) {
    const { success, email1 } = otp.verifyOTP(req.body.otp);

    if (success == true) {
        Customer.findOne({ email: email1 }).then(function (customerData) {
            const token = jwt.sign({ customerID: customerData._id }, 'Sercretkey');
            res.status(200).json({ success: true, token: token, customerData: customerData });
        }).catch(function (err) {
            res.status(500).json({ success: false, message: err });
        })
    }
    else {
        res.status(500).json({ success: false, message: "Incorrect OTP" });
    }
});

router.post('/checkEmail', function (req, res) {
    const email = req.body.email;

    Customer.findOne({ email: email }).then(function (customerData) {
        const token = jwt.sign({ customerID: customerData._id }, 'Sercretkey');
        res.status(200).json({ success: true, token: token, customerData: customerData });
    }).catch(function (err) {
        res.status(500).json({ success: false, message: err });
    })
});

module.exports = router;