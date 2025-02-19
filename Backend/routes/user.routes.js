const express = require('express');
const router = express.Router();
// read doc of express validator
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email address"),
    body('fullname').isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],

    userController.registerUser // middleware for validation
)



module.exports = router;