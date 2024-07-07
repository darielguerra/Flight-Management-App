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
    departureAirport: [{ type: Schema.Types.ObjectId, ref: 'Airport' }],
    arrivalAirport: [{ type: Schema.Types.ObjectId, ref: 'Airport' }],
    pilot: [{ type: Schema.Types.ObjectId, ref: 'Pilot' }]
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;

