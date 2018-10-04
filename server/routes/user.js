const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const passport = require('../passport')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport');

router.post('/user/', (req, res) => {

    const { username, password, rolename, firstname, lastname } = req.body
    // ADD VALIDATION
    console.log(req.body)
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
            console.log("Creating New User " + newUser)
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
                console.log("User " + savedUser)
            })
        }
    })
})

router.get('/employees/', (req, res) => {

    User.find({
        rolename: "Employee", activeemployee: true
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
            onbreak: req.user.onbreak,
            activeemployee: req.user.activeemployee
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
    console.log(req.user.username)
    User.findOne({
        username: req.user.username
    }).then(function (user) {
        res.json(user);
    })
})

router.get('/id/:currentUser', (req, res, next) => {
    console.log(req.params.currentUser)
    User.findOne({
        username: req.params.currentUser
    }).then(function (user) {
        res.json(user);
    })
})

router.post('/hremail', (req, res) => {
    const data = req.body;
    console.log('Data: ', data);
    console.log("Importance " + data.importance);
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({ host: 'smtp.gmail.com', port: 465, secure: true,  service: 'Gmail', auth: { user: 'veiappgroupproject3', pass: 'Veiapp123!' }, tls: { rejectUnauthorized: false } }));
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'veiappgroupproject3@gmail.com', // sender address
        to: 'fsf238@gmail.com', // list of receivers
        subject: 'Message from ' + data.name, // Subject line
        text: `
        Department: ${data.department}
        Importance: ${data.importance}
        Description: ${data.description}`// plaintext body
        // text: req.body.importance,
        // text: req.body.description
    };
    //send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    res.json('You should have an email');
});

router.post('/payrollemail', (req, res) => {
    const data = req.body;
    console.log('Data: ', data);
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({ host: 'smtp.gmail.com', port: 465, secure: true,  service: 'Gmail', auth: { user: 'veiappgroupproject3', pass: 'Veiapp123!' }, tls: { rejectUnauthorized: false } }));
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'veiappgroupproject3@gmail.com', // sender address
        to: 'fsf238@gmail.com', // list of receivers
        subject: 'Message from ' + data.name, // Subject line
        text: `
        Department: ${data.department}
        Description: ${data.description}`// plaintext body
        // text: req.body.importance,
        // text: req.body.description
    };
    //send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    res.json('You should have an email');
});

router.post('/supervisoremail', (req, res) => {
    const data = req.body;
    console.log('Data: ', data);
    // create reusable transporter object using the default SMTP transport
    // var transporter = nodemailer.createTransport('smtps://veiappgroupproject3@gmail.com:Veiapp123!@smtp.gmail.com');
    var transporter = nodemailer.createTransport(smtpTransport({ host: 'smtp.gmail.com', port: 465, secure: true,  service: 'Gmail', auth: { user: 'veiappgroupproject3', pass: 'Veiapp123!' }, tls: { rejectUnauthorized: false } }));
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'veiappgroupproject3@gmail.com', // sender address
        to: 'fsf238@gmail.com', // list of receivers
        subject: 'Message from ' + data.name, // Subject line
        text: `
        Department: ${data.department}
        Description: ${data.description}`// plaintext body
        // text: req.body.importance,
        // text: req.body.description
    };
    //send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    res.json('You should have an email');
});

router.post('/maintenanceemail', (req, res) => {

    const data = req.body;
    
    console.log('Data: ', data);
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({ host: 'smtp.gmail.com', port: 465, secure: true,  service: 'Gmail', auth: { user: 'veiappgroupproject3', pass: 'Veiapp123!' }, tls: { rejectUnauthorized: false } }));
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'veiappgroupproject3@gmail.com', // sender address
        to: 'fsf238@gmail.com', // list of receivers
        subject: 'Message from ' + data.name, // Subject line
        text: `
        Department: ${data.department}
        Description: ${data.description}`// plaintext body
        // text: req.body.importance,
        // text: req.body.description
    };
    //send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(` ${error} this sis the error`);
        }
        console.log('Message sent: ' + info.response);
    });
    res.json('You should have an email');
});

router.post('/partsreqemail', (req, res) => {
    const data = req.body;
    console.log('Data: ', data);
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({ host: 'smtp.gmail.com', port: 465, secure: true,  service: 'Gmail', auth: { user: 'veiappgroupproject3', pass: 'Veiapp123!' }, tls: { rejectUnauthorized: false } }));
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'veiappgroupproject3@gmail.com', // sender address
        to: 'fsf238@gmail.com', // list of receivers
        subject: 'Message from ' + data.name, // Subject line
        text: `
        Department: ${data.department}
        Timeframe: ${data.timeFrame}
        Part Name: ${data.partName}
        Part ID: ${data.partID}
        Quantity: ${data.partQuantity}`// plaintext body
    };
    //send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    res.json('You should have an email');
});

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

router.post("/startbreak", (req, res, next) => {
    console.log(req.body.startbreak)
    User.findOneAndUpdate({ username: req.body.username }, {
        $push: {
            startbreak: {
                "breakstart": req.body.startbreak
            }
        }
    },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
});

router.post("/endbreak", (req, res, next) => {
    console.log(req.body.endbreak)
    User.findOneAndUpdate({ username: req.body.username }, {
        $push: {
            endbreak: {
                "breakend": req.body.endbreak
            }
        }
    },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
});


router.post("/updateUser", (req, res, next) => {
    User.findOneAndUpdate({ username: req.body.username }, {
        $set: {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            rolename: req.body.rolename,
            activeemployee: req.body.activeemployee
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