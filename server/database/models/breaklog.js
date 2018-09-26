const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: false },
    rolename: { type: String, required: false, unique: false },
    firstname: { type: String, required: false, unique: false },
    lastname: { type: String, required: false, unique: false },
    onbreak: { type: Boolean, required: true, default: false }
})