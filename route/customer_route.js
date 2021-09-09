const express = require('express');
const router = express.Router();
const Customer = require('../model/customer_model');
const jwt = require('jsonwebtoken');
const otp = require('./OTPverify');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const upload = require('../middleware/upload');

//Customer Sign up
router.post('/customer/insert',
 [
    check('fullname', "Please enter your name").not().isEmpty(),
    check('email', "Invalid Email address").isEmail(),
    check('contact', "Contact is required").not().isEmpty(),
    check('gender', "Please choose a gender").not().isEmpty()
],
 function (req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const contact = req.body.contact;
        const gender = req.body.gender;
        const photo = req.body.photo;

        const customerData = new Customer({ fullname: fullname, email: email, contact: contact, gender: gender, photo:photo});
        customerData.save().then(function (result) {
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
            const token = jwt.sign({ customerID: customerData._id }, 'Secretkey');
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
        const token = jwt.sign({ customerID: customerData._id }, 'Secretkey');
        res.status(200).json({ success: true, token: token, customerData: customerData });
    }).catch(function (err) {
        res.status(500).json({ success: false, message: err });
    })
});

router.get('/customer/all', function(req,res){
    Customer.find()
    .then(function(CustomerData){
        res.status(200).json({success:true, data:CustomerData})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })
})

router.get('/customer/single/:email', function(req,res){
    const Cemail = req.params.email;
    Customer.findOne({email:Cemail})
    .then(function(ConsumerData){
        res.status(200).json({ CustomerData: ConsumerData })
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })
})


router.get('/customer/details', auth.checkCustomer, function(req,res){
    const id = req.customerData._id;
   
    Customer.findOne({_id: id})
    .then(function(customerData){
        console.log(customerData)
        res.status(200).json({ success: true, customerData: customerData })
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })
})

router.put('/customer/update',  upload.single('photo'), function (req, res) {
    const id = req.body.id;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const contact = req.body.contact;
    const gender = req.body.gender;
    const photo = req.file.filename;
    
    Customer.updateOne({ _id: id }, { fullName: fullname, email: email, contact: contact, gender:gender,photo: photo })
        .then(function (result) {
            res.status(201).json({ messsage: "Customer updated!!", success: true })
        })
        .catch(function (err) {
            res.status(500).json({ messsage: err, success: false })
    })
})

router.put('/customer/updateImage', auth.checkCustomer, upload.single('photo'), function (req, res) {
    const id = req.customerData._id;
    if (req.file == undefined) {
        return res.status(201).json({ success: false, message: "Invalid  file format" })
    }
    Customer.updateOne({ _id: id }, {
        photo: req.file.filename
    }).then(function (data) {
        res.status(200).json({ message: 'image updated', success: true })
    }).catch(function (err) {
        res.send.status(500).json({ message: err , success: false})
    });
})

router.put('/customer/update/:id', auth.checkCustomer, function (req, res) {
    const id = req.params.id
    const fullname = req.body.fullname;
    const email = req.body.email;
    const contact = req.body.contact;
    const gender = req.body.gender;
    const photo = req.body.photo;

    Customer.updateOne({ _id: id }, {
        fullname: fullname, email: email, contact: contact, gender: gender
    })
    .then(function (result) {
        res.status(200).json({ message: "Customer updated", success: true })
    }).catch(function (e) {
        res.status(500).json({ message: e, success: false })
    })
})

module.exports = router;