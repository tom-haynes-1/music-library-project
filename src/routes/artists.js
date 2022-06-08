// import artist controller into artist router and defined a POST route to connect to controller
const express = require('express');

const artistController = require('../controllers/artists.js');

const router = express.Router();

router.post('/', artistController.create);

module.exports = router;