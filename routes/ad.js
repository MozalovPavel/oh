const router = require('express').Router();

const adController = require('../controllers/ad');

router.get('/new', adController.newAd);
router.get('/:id', adController.ad);

module.exports = router;
