const Pilot = require('../models/Pilot.model');

// get all pilots
const getAllPilots = async () => {
  const pilots = await Pilot.find();
  return pilots;
}

// add a pilot
const addPilot = async ({name, yearsOfService}) => {
  try {
      const pilot = new Pilot({
          name,
          yearsOfService
      });
      await pilot.save();

      return pilot._id;
  }
  catch (err) {
      console.error(err);
      throw {status: 400, message: err};
  }
}

//update airport
const updatePilot = async ({name, yearsOfService}) => {
  try {
      const pilot = await Pilot.findOneAndUpdate({_id:_id},
          {
            name,
            yearsOfService
          }
      );
      if (pilot == null) {
          throw `There is no pilot with id ${_id}`
      }
      return pilot;
  }  
  catch (err) {
      console.error(err)
      throw {status: 400, message: err}
  }
}

//delete airport
const deletePilot = async (id) => {
  try {
      const pilots = await Pilot.deleteOne({_id:id});
      return pilots;
  }
  catch (err) {
      console.error(err);
      throw {status: 400, message: err};
  }
}

module.exports = { getAllPilots, addPilot, updatePilot, deletePilot }