const { validationResult } = require("express-validator");
const userName = require("../models/user.model.js");
const userService = require("../services/user.service.js");

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, lastname, username, email, password } = req.body;
    
    const hashedPassword = await userService.hashPassword(password);
    const user = await userService.createUser({
        email,
        fullname,
        password: hashedPassword
    });
    const token = user.generateAuthToken();
    res.status(201).send({ fullname, lastname, username, email, token });
};