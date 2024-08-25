const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pilotSchema = new Schema({
     firstName: String,
     lastName: String,
     yearsOfService: Number
});

const Pilot = mongoose.model('Pilot', pilotSchema, 'Pilots');
module.exports = Pilot;
