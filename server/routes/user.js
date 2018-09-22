const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

router.post('/user/', (req, res) => {

    const { username, password, rolename, firstname, lastname } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                rolename: rolename,
                firstname: firstname,
                lastname: lastname
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.get('/employees/', (req, res) => {

    User.find({
        rolename: "Employee"
    }).sort({ "lastname": 1 }).then(function (employees) {
        res.json(employees); console.log("Employees " + employees)
    })
})

router.get('/onBreak/', (req, res) => {

    User.find({
        onbreak: true
    }).sort({ "lastname": 1 }).then(function (employees) {
        res.json(employees); console.log("Employees " + employees)
    })
})

router.post(
    '/user/login',
    function (req, res, next) {

        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            username: req.user.username,
            rolename: req.user.rolename,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            onbreak: req.user.onbreak
        };
        res.send(userInfo);
    }
)

router.get('/user/', (req, res, next) => {
    if (req.user) {
        User.findOne({
            username: req.user.username
        }).then(function (user) {
            res.json(user);
        })
    } else {
        res.json({ user: null })
    }
})

router.get('/id', (req, res, next) => {
    User.findOne({
        username: req.user.username
    }).then(function (user) {
        res.json(user);
    })
})

router.post("/update", (req, res, next) => {
    console.log("user " + req.body.username + " break status " + req.body.onbreak)
    User.findOneAndUpdate({ username: req.body.username }, {
        $set: {
            onbreak: req.body.onbreak
        }
    },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
});


router.post('/user/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router