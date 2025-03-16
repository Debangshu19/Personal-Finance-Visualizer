const budgetController = require('../controllers/budgetcontroller');
const express = require('express');
const router = express.Router();

router.post('/add', budgetController.add);
router.get('/', budgetController.getAll);
router.delete('/delete', budgetController.deleteBudget);
module.exports = router;