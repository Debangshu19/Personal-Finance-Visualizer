const categoryController = require('../controllers/categorycontroller');
const express = require('express');
const router = express.Router();

router.get('/', categoryController.getAll);
module.exports = router;