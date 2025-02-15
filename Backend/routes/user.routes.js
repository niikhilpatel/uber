const express = require('express');
const router = express.Router();
// read doc of express validator
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('fullname').isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body('lastname').isLength({min: 3}).withMessage("Last name must be at least 3 characters long"),
    body('username').isLength({min: 3}).withMessage("Username must be at least 3 characters long"),
    body('email').isEmail().withMessage("Invalid email address"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],

    userController.registerUser // middleware for validation
)



module.exports = router;