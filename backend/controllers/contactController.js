const Message = require('../models/Message.js');
const { validationResult } = require('express-validator');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
        const newMessage = await Message.create({
            name,
            email,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            data: newMessage,
            message: 'Message sent successfully!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
};

module.exports = {
    submitContactForm,
};
