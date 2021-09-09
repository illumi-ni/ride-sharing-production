const express = require('express');
const router = express.Router();
const Ride= require('../model/ride_model');
const auth = require('../middleware/auth');

router.post('/insert/Ride', function (req, res) {
    const from = req.body.from;
    const to = req.body.to;
    const date = req.body.date;
    const distance = req.body.distance;
    const price = req.body.price;
    const customer = req.body.customer._id;
    const driver = req.body.driver._id;
    
    const BookingData = new Ride({
        from: from, to: to, date: date, distance: distance, price: price, driverID: driver, customerID: customer
    });
    
    BookingData.save()
        .then(function (result) {
            res.status(201).json({ success: true,  message: "Booking has been successfully inserted!!!" });
        })
        .catch(function (e) {
            res.status(500).json({ success: false, message: e });
    })
})

router.get('/get/myBookings', auth.checkCustomer, function(req, res) {
    const id = req.customerData.id
    
    Ride.find({ customerID: id })
    .then(function(data){
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({message: e});
    })
})

module.exports = router;