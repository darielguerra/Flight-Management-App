const Pilot = require('../models/Pilot.model');

// get all pilots
const getAllPilots = async () => {
  const pilots = await Pilot.find().populate('homeLocation');
  return pilots;
}

// add a pilot
const addPilot = async ({firstName, lastName, homeLocation, timeStamp}) => {
  try {
      const pilot = new Pilot({
          firstName,
          lastName,
          homeLocation,
          timeStamp
      });
      await pilot.save();

      return pilot._id;
  }
  catch (err) {
      console.error(err);
      throw {status: 400, message: err};
  }
}

// update pilot
const updatePilot = async ({ _id, firstName, lastName, homeLocation }) => {
  console.log('updatePilot called with:', { _id, firstName, lastName, homeLocation }); //logging
  try {
    const pilot = await Pilot.findOneAndUpdate({ _id },      
      {
        firstName,
        lastName,
        homeLocation
      },
      { new: true } // This option returns the updated pilot instead of the old one
    );

    if (!pilot) {
      throw `There is no pilot with id ${_id}`;
    }

    return pilot;
  } catch (err) {
    console.error(err);
    throw { status: 400, message: err };
  }
};

//delete airport (works simpler then airport delete method)
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