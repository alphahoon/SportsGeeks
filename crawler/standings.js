const EPL = require('./standing_EPL');
const Bundesliga = require('./standing_Bundesliga');
const Liga = require('./standing_Liga');
const Ligue1 = require('./standing_Ligue1');
const MLS = require('./standing_MLS');
const SerieA = require('./standing_SerieA');
const KBO = require('./standing_KBO');
const KBL = require('./standing_KBL');
const NBA = require('./standing_NBA');
const Kleaguechallenge = require('./standing_Kleaguechallenge');
const Kleagueclassic = require('./standing_Kleagueclassic');
const MLB_American = require('./standing_MLB_American');
const MLB_National = require('./standing_MLB_National');
const NPB_Central = require('./standing_NPB_Central');
const NPB_Pacific = require('./standing_NPB_Pacific');

const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('standings');
collection.remove().then(() => db.close());

EPL();
Bundesliga();
Liga();
Ligue1();
MLS();
SerieA();
KBO();
KBL();
NBA();
Kleaguechallenge();
Kleagueclassic();
MLB_American();
MLB_National();
NPB_Central();
NPB_Pacific();
