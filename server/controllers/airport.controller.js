const Airport = require('../models/Airport.model');

 // get all airports
const getAllAirports = async () => {
    const airports = await Airport.find();
    return airports;
}

// add an airport
const addAirport = async ({code, city, state}) => {
  
    // Format the current date
    const formattedDate = new Intl.DateTimeFormat('en-US', {
     month: 'short', // Short month name (e.g., "Jan")
     day: 'numeric',
     year: 'numeric',
   }).format(new Date());

   console.log(formattedDate);

    try {
        const airport = new Airport({
            code,
            city,
            state,
            timeStamp: formattedDate
        });
        await airport.save();

        return airport._id;
    }
    catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

//update airport
const updateAirport = async ({_id, code, city, state}) => {
  try {
    const airport = await Airport.findOneAndUpdate({_id},
    {
      code,
      city,
      state
    },
    { new: true } //returns updated pilot 
  );
  if (!airport){
    throw `There is no airport with id ${_id}`;
  }
  return airport;
  
  } catch (err) {
    console.error(err);
    throw {status: 400, message: err};
  }
};

// old update airport
/*
const updateAirport = async ({code, city, state}) => {
    try {
        const airport = await Airport.findOneAndUpdate({_id:_id},
            {
                code, city, state 
            }
        );
        if (airport == null) {
            throw `There is no airport with id ${_id}`
        }
        return airport;
    }  
    catch (err) {
        console.error(err)
        throw {status: 400, message: err}
    }
}
*/

//delete airport
const deleteAirport = async ({_id}) => {
    try {
        const airport = await Airport.findByIdAndDelete(_id);
        if (!airport){
          throw `There is no airport with id ${_id}`;
        }
        return airport;
    }
    catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

module.exports = { getAllAirports, addAirport, updateAirport, deleteAirport }