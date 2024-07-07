const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        type: String,
        unique: true
    },
    departureDate: String,
    arrivalDate: String,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    pilot: String
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;

