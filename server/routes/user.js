const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

router.post('/', (req, res) => {

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

router.post(
    '/login',
    function (req, res, next) {

        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            username: req.user.username,
            rolename: req.user.rolename,
            firstname: req.user.firstname,
            lastname: req.user.lastname
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.get('/:id', (req, res, next) => {

})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router