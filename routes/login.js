const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
    var json = {};
    json.status = 'OK';
    json.username = req.user.username;
    json.token = req.user._id;
    json.email = req.user.email;
    json.utcOffset = req.user.utcOffset;
    json.language = req.user.language;
    json.date = req.user.date;
    res.json(json);
});

router.post('/', passport.authenticate('local'), (req, res) => {
    var json = {};
    json.status = 'OK';
    json.username = req.user.username;
    json.token = req.user._id;
    json.email = req.user.email;
    json.utcOffset = req.user.utcOffset;
    json.language = req.user.language;
    json.date = req.user.date;
    res.json(json);
});

module.exports = router;
