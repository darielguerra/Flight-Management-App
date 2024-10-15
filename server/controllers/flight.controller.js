const Flight = require('../models/Flight.model');

const getAllFlights = async () => {
    /*const flights = await Flight.find();*/
    const flights = await Flight.find().populate('departureAirport').populate('arrivalAirport').populate('pilot');
    /*.populate('departureAirport', 'code');*/;
    return flights;
} 

// get last flight number
const getLastFlight = async () => {
    try {
        const flight = await Flight.findOne().sort({_id:-1});
        return flight.flightNumber;
    }
    catch (err) {
        console.error(err);
    }
}

// create flight
const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
    arrivalTime, departureAirport, arrivalAirport, pilot}) => {
    try {
        const flight = new Flight({
            flightNumber,
            departureDate,
            arrivalDate,
            departureTime, 
            arrivalTime,
            departureAirport,
            arrivalAirport,
            pilot
        });
        await flight.save(); // Saves the newly created flight to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are not up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}


const updateAFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
    arrivalTime, departureAirport, arrivalAirport, pilot}) => {
  try{
    const flight = await Flight.findOneAndUpdate({flightNumber:flightNumber}, 
        {
            flightNumber, departureDate, arrivalDate, departureTime, 
            arrivalTime, departureAirport, arrivalAirport, pilot
        }
    );
    if (flight == null) {
        throw `no flight with a flight number ${flightNumber} exists`
    }
    return flight;
  }  catch (err) {
    console.error(err)
    throw { status: 400, message: err };
  }    
}


const deleteAFlight = async (flightNum) => {
    try {
        const flights = await Flight.deleteOne({flightNumber:flightNum});
        return flights;
    }catch (err) {
        console.error(err)
        throw { status: 400, message: err };
    }
}

module.exports = { createFlight, getAllFlights, getLastFlight, updateAFlight, deleteAFlight };

