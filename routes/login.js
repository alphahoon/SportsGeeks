const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
    var json = {};
    json.status = 'OK';
    json.username = req.user.username;
    res.json(json);
});

router.post('/', passport.authenticate('local'), (req, res) => {
    var json = {};
    json.status = 'OK';
    json.username = req.user.username;
    res.json(json);
});

module.exports = router;
