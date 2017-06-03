const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res, next) => {
    var json = {};
    req.logout();
    json.status = 'OK';
    res.json(json);
});

module.exports = router;
