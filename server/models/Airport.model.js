const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
     code: {
          type: String,
          required: true,
          min: 3,
          max: 3
      },
     city: {
          type: String,
          required: true
      },
     state: {
          type: String,
          required: true
      }
});

const Airport = mongoose.model('Airport', airportSchema, 'Airports');
module.exports = Airport;
