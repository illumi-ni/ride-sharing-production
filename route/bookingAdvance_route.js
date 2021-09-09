const express = require('express');
const router = express.Router();
const AdvanceBook = require('../model/advancedBook_model');
const Customer = require('../model/customer_model');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');

router.post('/customer/booking', function (req, res) {

    const id = req.body.id;
    const email = req.body.email;
    const contact = req.body.contact;
    const from = req.body.from;
    const to = req.body.to;
    const date = req.body.date;
    const time = req.body.time;
    const distance = req.body.distance;
    const price = req.body.price;

    const BookingData = new AdvanceBook({
        ID: id,
        email: email, contact: contact, from: from, to: to, date: date, time: time, distance: distance,
        price: price
    });

    BookingData.save()
        .then(function (result) {
            res.status(201).json({ success: true, message: "Booking has been successfully inserted!!!" });
        })
        .catch(function (e) {
            res.status(500).json({ success: false, message: e });
        })
})

router.get('/booking/all', function (req, res) {
    AdvanceBook.find()
        .then(function (BookingData) {
            res.status(200).json({ success: true, data: BookingData })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.get('/booking/single/:id', function (req, res) {
    const pid = req.params.id;
    AdvanceBook.findOne({ _id: pid })
        .then(function (BookingData) {
            res.status(200).json(BookingData)
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.get('/booking/single', auth.checkCustomer, function (req, res) {
    const id = req.customerData._id
    AdvanceBook.find({ ID: id })
        .then(function (BookingData) {
            console.log(BookingData)
            res.status(200).json({ success: true, data: BookingData })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.put('/update/booking', auth.checkCustomer, function (req, res) {
    const id = req.body.id;
    const from = req.body.from;
    const to = req.body.to;
    const date = req.body.date;
    const time = req.body.time;
    const distance = req.body.distance;
    const price = req.body.price;

    AdvanceBook.updateOne({ _id: id }, {
        from: from, to: to, date: date, time: time, distance: distance,
        price: price
    }).then(function (result) {
        res.status(200).json({ message: "Booking updated!!", success: true });
    }).catch(function (e) {
        res.status(500).json({ message: e, success: false });
    })
})


router.delete('/delete/booking/:bid', function (req, res) {
    const bid = req.params.bid;
    AdvanceBook.deleteOne({ _id: bid })
        .then(function (result) {
            res.status(200).json({ message: "Deleted Successfully!!", status: "true" });
        })
        .catch(function (e) {
            res.status(500).json({ message: e, status: "false" });
        })
})

module.exports = router;