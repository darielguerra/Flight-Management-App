const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pilotSchema = new Schema({
     firstName: String,
     lastName: String,
     /*homeLocation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Airport' }],*/
     imagePath: { type: String, required: true },
     timeStamp: String
});

const Pilot = mongoose.model('Pilot', pilotSchema, 'Pilots');
module.exports = Pilot;
