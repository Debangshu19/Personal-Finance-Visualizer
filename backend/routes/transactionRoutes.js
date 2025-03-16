const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactioncontroller');

router.post('/add', transactionController.add);
router.get('/', transactionController.getAll);
router.patch('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;