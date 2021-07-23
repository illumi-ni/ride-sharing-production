const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

const db = require('./database/db');
const driver_route = require('./route/driver_route');
const route_customer = require('./route/customer_route');
const admin_route = require('./route/Admin_Route');
const booking_route = require('./route/bookingAdvance_route');

app.use(express.static("images"));
app.use(driver_route);
app.use(route_customer);
app.use(admin_route);
app.use(booking_route);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static( './client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build' ));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});