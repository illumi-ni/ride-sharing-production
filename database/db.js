const mongoose = require('mongoose');

mongoose.connect( process.env.connect.MONGODB_URI || 'mongodb://127.0.0.1:27017/RideSharing', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});