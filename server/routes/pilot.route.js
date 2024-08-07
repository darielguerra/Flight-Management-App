const router = require('express').Router();
const { getAllPilots, addPilot, updatePilot, deletePilot } = require('../controllers/pilot.controller');

 // get all pilots
router.get('/', async (req, res) => {
    const pilots = await getAllPilots();
    res.json(pilots);
});

  // add a pilot
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const pilotId = await addPilot(req.body);
        res.status(201).json({_id: pilotId});
    }
    catch (err) {
        res.status(err?.status || 5000).json(err);
    }
});

 //update pilot
 router.put('/:id', async (req, res) => {
    try{
        const pilot = await updatePilot(req.body);
        res.status(201).json({_id: pilot});
    }
    catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    }
 });

 //delete pilot
 router.delete('/:id', async (req, res) =>{
    try{
        const pilot = await deletePilot(req.params.id);
        res.status(201).json({_id: pilot});
    } catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    } 
});

module.exports = router;
