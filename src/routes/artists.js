// import artist controller into artist router and defined a POST route to connect to controller
const express = require('express');

const artistController = require('../controllers/artists.js');

const router = express.Router();

router.post('/', artistController.create);

router.get('/', artistController.read);

router.get('/:artistId', artistController.readById);

router.patch('/:artistId', artistController.update);

module.exports = router;