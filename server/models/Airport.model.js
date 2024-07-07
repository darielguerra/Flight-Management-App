const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
     code: String,
     city: String,
     state: String
});

const Airport = mongoose.model('Airport', airportSchema, 'Airports');
module.exports = Airport;
