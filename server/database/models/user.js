const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: true, min: 4, max: 4, required: true },
    password: { type: String, unique: false, required: false },
    rolename: { type: String, required: false, unique: false, enum: ["Employee", "Manager"], },
    firstname: { type: String, required: true, minlength: 1, unique: false },
    lastname: { type: String, required: true, minlength: 1, unique: false },
    onbreak: { type: Boolean, required: true, default: false },
    activeemployee: { type: Boolean, required: true, default: true },
    startbreak: [
        {
            breakstart: String,
        }
    ],
    endbreak: [
        {
            breakend: String,
        }
    ]
})

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');

        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User