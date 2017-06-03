const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const db = req.app.get('db');

    var json = {};
    res.json(json);
});

module.exports = router;
