const express = require('express');
const router = express.Router();
const Driver = require('../model/driver_model');
const upload = require('../middleware/upload');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const auth = require('../middleware/auth');

//register for driver
router.post('/admin/register', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'licence', maxCount: 1 }]), function (req, res) {
    if (req.files == undefined) {
        return res.status(400).json({ message: "Invalid field format" });
    }

    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;
    const citizenship = req.body.citizenship;
    const licence = req.body.licence;
    const gender = req.body.gender;
    const vechileNo = req.body.vechileNo;
    const model = req.body.model;
    const brand = req.body.brand;
    const photo = req.body.photo;

    bcryptjs.hash(password, 10, function (err, hash) {
        const driverData = new Driver({
            fullname: fullname, email: email, username: username, password: hash,
            phone: phone, citizenship: citizenship, licence: req.files.licence[0].filename, gender: gender, vechileNo: vechileNo, model: model, brand: brand, photo: req.files.photo[0].filename
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

router.get('/driver/all', function (req, res) {
    Driver.find()
        .then(function (driverData) {
            res.status(200).json({ success: true, data: driverData })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.get('/driver/single', auth.checkDriver, function (req, res) {
    const id = req.driverData._id
    Driver.findOne({ _id: id })
        .then(function (driverData) {
            res.status(200).json({ success: true, driverData: driverData });
        })
        .catch(function (e) {
            res.status(500).json({ message: e, success: false });
        })
})

router.put('/driver/update/:id', auth.checkDriver, function (req, res) {
    const id = req.params.id;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const citizenship = req.body.citizenship;
    const licence = req.body.licence;
    const vechileNo = req.body.vechileNo;
    const photo = req.body.photo;

    Driver.updateOne({ _id: id }, { fullname: fullname, username: username, phone: phone, email: email, gender: gender, citizenship: citizenship, licence: licence, vechileNo: vechileNo })
        .then(function (result) {
            res.status(201).json({ messsage: "Driver updated!!", success: true })
        })
        .catch(function (err) {
            res.status(500).json({ messsage: err, success: false })
        })
})

router.put('/driver/updateImage', auth.checkDriver, upload.single('photo'), function (req, res) {
    const id = req.driverData._id;
    if (req.file == undefined) {
        return res.status(201).json({ success: false, message: "Invalid  file format" })
    }
    
    Driver.updateOne({ _id: id }, {
        photo: req.file.filename
    }).then(function (data) {
        res.status(200).json({ message: 'image updated', success: true })
    }).catch(function (err) {
        res.send.status(500).json({ message: err, success: false })
    });
})

router.delete('/delete/driver/:did', function (req, res) {
    const did = req.params.did;
    Driver.deleteOne({ _id: did })
        .then(function (result) {
            res.status(200).json({ message: "Deleted Successfully!!", status: "true" });
        })
        .catch(function (e) {
            res.status(500).json({ message: e, status: "false" });
        })
})

module.exports = router;