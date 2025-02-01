const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const multer = require('multer');
const path = require('path');
const logger = require('./middleware/logger');

const cors = require('cors'); // Cross Origin Resource Sharing
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 8085; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic
app.use(logger);

const storage = multer.diskStorage({
  // desitination and filename are diskStorage properties needed to store items
  // destination: where to store it
  // req isn't used here but you could use it for example (req is required):
  // const userId = req.body.userId;
  // cb(null, `uploads/${userId}) to save in user's own folder
  destination: (req, file, cb) => { // (request, uploadedFile, callback)
    const savePath = process.env.Render ? '/server/pilot_images' : 'pilot_images';
    // process.env.Render render keyword to use when you have a specific process that's dif
    // from local and production, here to save in render's persistent store if running produtoin
    // if not, save locally. This is to persist images across deploys
    cb(null, savePath); // callback to say where file so be saved
                               // null returns if there's no error, for error handling
                               // pilot_images is the folder to save in
                               // I created a folder called pilot_images in the server
  },
  // filename: name it will be stored under
  filename: (req, file, cb) => { //date now returns one number instead of spaces like Date()
    cb(null, Date.now() + '-' + file.originalname); //addes timestamp to name
  }
});

// creates an instance of multer using the defined storage
const upload = multer({ storage });
module.exports = upload;

//this allows the image to be accessed by the browser and display
app.use('/pilot_images', express.static(path.join(__dirname, 'pilot_images')));

// router connections
app.use('/flights', require('./routes/flight.route'));
app.use('/pilots', require('./routes/pilot.route'));
app.use('/airports', require('./routes/airport.route'));

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

// database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});