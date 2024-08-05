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
        res.status(err?.status || 5000).json(err);
    }
});

 //update airport
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

 //delete airport
 router.delete('/:id', async (req, res) =>{
    try{
        const airport = await deleteAirport(req.params.id);
        res.status(201).json({_id: airport});
    } catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    } 
});

module.exports = router;


