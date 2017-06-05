const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const moment = require('moment');
const router = express.Router();

router.post('/', (req, res, next) => {
    console.log('Registering user...'.blue);
    Account.register(new Account({
        username: req.body.username,
        email: req.body.email,
        utcOffset: req.body.utcOffset,
        language: req.body.language,
        date: moment()
            .utcOffset(0)
    }), req.body.password, function (err) {
        var json = {};
        if (err) {
            console.log('Error while user register!'.red);
            json.status = 'ERROR';
            res.json(json);
        } else {
            console.log('user registered!');
            json.status = 'OK';
            res.json(json);
        }
    });
});

module.exports = router;
