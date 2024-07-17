const Airport = require('../models/Airport.model');

 // get all airports
const getAllAirports = async () => {
    const airports = await Airport.find();
    return airports;
}

// add an airport
const addAirport = async ({code, city, state}) => {
    try {
        const airport = new Airport({
            code,
            city,
            state
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
const updateAirport = async ({code, city, state}) => {
    try {
        const airport = await Airport.findOneAndUpdate({_id:_id},
            {
                code, city, state 
            }
        );
        if (flight == null) {
            throw `There is no airport with id ${_id}`
        }
        return airport;
    }  
    catch (err) {
        console.error(err)
        throw {status: 400, message: err}
    }
}

//delete airport
const deleteAirport = async (id) => {
    try {
        const airports = await Airport.deleteOne({_id:id});
        return airports;
    }
    catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

module.exports = { getAllAirports, addAirport, updateAirport, deleteAirport }