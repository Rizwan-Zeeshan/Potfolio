const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitContactForm } = require('../controllers/contactController.js');

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('subject', 'Subject is required').not().isEmpty(),
        check('message', 'Message is required').not().isEmpty(),
    ],
    submitContactForm
);

module.exports = router;
