const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact_Model');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');

router.post('/customer/contact', function (req, res) {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const ContactData = new Contact({
        fullname: fullname, email: email, subject: subject, message: message
    });

    ContactData.save()
        .then(function (result) {
            res.status(201).json({ success: true, message: "Contact has been successfully inserted!!!" });
        })
        .catch(function (e) {
            res.status(500).json({ success: false, message: e });
        })
})
router.get('/contact/all', function (req, res) {
    Contact.find()
        .then(function (ContactData) {
            res.status(200).json({ success: true, data: ContactData })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.delete('/delete/contact/:cid', function (req, res) {
    const cid = req.params.cid;
    Contact.deleteOne({ _id: cid })
        .then(function (result) {
            res.status(200).json({ message: "Deleted Successfully!!", status: "true" });
        })
        .catch(function (e) {
            res.status(500).json({ message: e, status: "false" });
        })
})
module.exports = router;