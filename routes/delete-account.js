const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.post('/', passport.authenticate('local'), (req, res) => {
    const db = req.app.get('db');
    const bodyObj = req.app.get('bodyObj');
    const objId = req.app.get('objId');
    const accounts = db.get('accounts');
    var json = {};
    accounts.findOne({
            _id: objId
        })
        .then((account) => {
            accounts.remove({
                    _id: objId
                })
                .then((account) => {
                    console.log(`Deleted user ${bodyObj.username}`.red);
                    json.status = 'OK';
                    res.json(json);
                })
        })
        .catch((err) => {
            var msg = 'User not found while deleting user' + bodyObj.username;
            console.log(msg.red);
            json.status = 'ERROR';
            json.description = msg;
            res.json(json);
        });
});

module.exports = router;
