const router = require('express').Router();

const indexController = require('../controllers/index');

router.get('/', indexController.get);

module.exports = router;
