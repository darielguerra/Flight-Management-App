const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        type: Number,
        unique: true
    },
    departureDate: String,
    arrivalDate: String,
    departureTime: String,
    arrivalTime: String,
    
  /*departureAirport: String,
    arrivalAirport: String, */

    departureAirport: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Airport' }],
    arrivalAirport: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Airport'}], 
    
    /*pilot: [{ type: Schema.Types.ObjectId, ref: 'Pilot' }]*/
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;

