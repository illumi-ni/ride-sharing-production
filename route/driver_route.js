const express = require('express');
const router = express.Router();
const Driver = require('../model/driver_model');
const upload = require('../middleware/upload');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

//register for driver
router.post('/admin/register', upload.single('licence'), function (req, res) {
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid field format" });
    }

    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;
    const citizenship = req.body.citizenship;
    const licence = req.body.licence;
    const dob = req.body.dob;
    const vechileNo = req.body.vechileNo;
    const model = req.body.model;

    console.log(req.body)

    //{variable:modelname}
    bcryptjs.hash(password, 10, function (err, hash) {
        const driverData = new Driver({
            fullname: fullname, email: email, username: username, password: hash,
            phone: phone, citizenship: citizenship, licence: req.file.filename, dob: dob, vechileNo: vechileNo, model: model
        });
        driverData.save().then(function (result) {
            res.status(201).json({ success: true, message: "Driver Registration has been successfully inserted!!!" });
        }).catch(function (e) {
            res.status(500).json({ success: false, message: e });
        });
    });
});

//Driver login system
router.post('/driver/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    Driver.findOne({ email: email })
        .then(function (driverData) {
            if (driverData === null) {
                return res.status(403).json({ message: "user not found", success: false });
            }

            bcryptjs.compare(password, driverData.password, function (err, result) {
                if (result === false) {
                    return res.status(403).json({ message: "Invalid login credentials!!", success: false });
                }

                //token generate
                const token = jwt.sign({ driverID: driverData._id }, 'Secretkey');
                res.status(200).json({
                    token: token,
                    success: true,
                    driverData: driverData
                })
            })
        })
        .catch(function (err) {
            res.status(500).json({ messsage: err })
        })
})

module.exports = router;