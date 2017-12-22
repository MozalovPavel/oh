const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.route('/signin')
    .get(authController.getSignInForm)
    .post(authController.signIn);

router.route('/signup')
    .get(authController.getSignUpForm)
    .post(authController.signUp);

module.exports = router;
