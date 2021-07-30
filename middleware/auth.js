const jwt = require('jsonwebtoken');
const Customer = require('../model/customer_model');
const Admin = require('../model/Admin_Model');
const Driver = require('../model/driver_model');

module.exports.checkCustomer = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedData = jwt.verify(token, 'Secretkey');
        Customer.findOne({ _id: verifiedData.userID })
            .then(function (userInfo) {
                req.userData = userInfo;
                next();
            })
            .catch(function (e) {
                res.status(401).json({ message: "Authorization failed" })
            });
    }
    catch (e) {
        res.status(401).json({ message: "Authorization failed!!" })
    }
}

module.exports.checkDriver = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedData = jwt.verify(token, 'Secretkey');
        Driver.findOne({ _id: verifiedData.userID })
            .then(function (userInfo) {
                req.userData = userInfo;
                next();
            })
            .catch(function (e) {
                res.status(401).json({ message: "Authorization failed" })
            });
    }
    catch (e) {
        res.status(401).json({ message: "Authorization failed!!" })
    }
}

module.exports.checkAdmin = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedData = jwt.verify(token, 'Secretkey');
        Admin.findOne({ _id: verifiedData.userID })
            .then(function (userInfo) {
                req.userData = userInfo;
                next();
            })
            .catch(function (e) {
                res.status(401).json({ message: "Authorization failed" })
            });
    }
    catch (e) {
        res.status(401).json({ message: "Authorization failed!!" })
    }
}