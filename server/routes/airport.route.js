const router = require('express').Router();
const { getAllAirports, addAirport, updateAirport, deleteAirport } = require('../controllers/airport.controller');

 // get all airports
router.get('/', async (req, res) => {
    const airports = await getAllAirports();
    res.json(airports);
});

 // add an airport
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const airportId = await addAirport(req.body);
        res.status(201).json({_id: airportId});
    }
    catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

//update airport
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { code, city, state } = req.body;
  try {
    const updatedAirport = await updateAirport({ _id: id, code, city, state });
    res.status(200).json(updatedAirport);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || 'Server Error' });
  }
});

 //old update airport
 /*
 router.put('/:id', async (req, res) => {
    try{
        const airport = await updateAirport(req.body);
        res.status(201).json({_id: airport});
    }
    catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    }
 });
 */

 //delete airport
 router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    try{
        const airport = await deleteAirport({_id: id});
        res.status(200).json({_id: airport._id});
    } catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    } 
});

module.exports = router;


