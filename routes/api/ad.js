const router = require('express').Router();

const apiAddController = require('../../controllers/api/ad');

router.get('/add', apiAddController.add);

module.exports = router;
