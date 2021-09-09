const mongoose = require('mongoose');
const Driver = require('./driver_model');
const Schema = mongoose.Schema;

const Ride = mongoose.model('Ride',{
    from:{
        type: String,
          
    },
    to:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    price:{
        type: String
    },
    customerID:{
        type: String,
        required: true
    },
    driverID:{
        type: String,
        required: true
    }
});

module.exports = Ride;