var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1/notif_database';

mongoose.connect(connectionString);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));