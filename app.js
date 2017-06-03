const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const queryString = require('querystring');
const monk = require('monk');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local')
    .Strategy;
const apiKey = 'LM7JDrHT2RyzzW5D';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(session({
    keys: ['KAIST', 'CS457', '...']
}));
app.use(express.static(path.join(__dirname, 'public')));

// passport config
app.use(passport.initialize());
app.use(passport.session());

var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Connect mongoose
mongoose.connect('mongodb://localhost/main', function (err) {
    if (err)
        console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
});

// monk
const url = 'mongodb://localhost/main';
const db = monk(url);
db.then(() => {
    console.log('Connected correctly to server.'.green);
    app.set('db', db);
})

// check authenticated
app.use((req, res, next) => {
    // query
    console.log(`\n${req.path}`.green);
    console.log(req.body.yellow);
    var queryStr = queryString.stringify(req.query, null, null);
    var queryObj = queryString.parse(queryStr);
    var queryObjtoStr = JSON.stringify(queryObj, null, 2);
    app.set('queryObj', queryObj);
    console.log(`query = ${queryObjtoStr}`.yellow);

    var json = {};
    if (queryStr.length == 0) {
        var msg = 'query not provided.';
        console.log(msg.red);
        json.status = 'ERROR';
        json.description = msg;
        res.json(json);
    } else if (queryObj.apiKey !== apiKey) {
        var msg = 'not authenticated.';
        console.log(msg.red);
        json.status = 'ERROR';
        json.description = msg;
        res.json(json);
    } else {
        next();
    }
});

var main = require('./routes/main');
var calendar = require('./routes/calendar');
var standings = require('./routes/standings');
var news = require('./routes/news');
var trends = require('./routes/trends');
var register = require('./routes/register');
var login = require('./routes/login');
var logout = require('./routes/logout');

app.use('/', main);
app.use('/main', main);
app.use('/calendar', calendar);
app.use('/standings', standings);
app.use('/news', news);
app.use('/trends', trends);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

module.exports = app;
