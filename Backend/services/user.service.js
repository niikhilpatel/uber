const userModel = require("../models/user.model.js");

module.exports.createUser = async ({
    fullname,
    lastname,
    username,
    email,
    password
}) => {
    if (!fullname || !lastname || !username || !email || !password) {
        throw new Error("All fields are required");
    }
    const user = await userModel.create({
        fullname,
        lastname,
        username,
        email,
        password
    });
    return user;
}