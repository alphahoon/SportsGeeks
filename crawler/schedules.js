const MLB = require('./MLB');
const MLS5 = require('./MLS5');
const MLS6 = require('./MLS6');
const EPL = require('./EPL');
const LaLiga = require('./LaLiga');
const SerieA = require('./SerieA');
const BuldesLiga = require('./BuldesLiga');
const KBL = require('./KBL');
const Ligue1 = require('./Ligue1');
const KBO = require('./KBO');
const KLeagueChallenge = require('./KLeagueChallenge');
const KLeagueClassic = require('./KLeagueClassic');
const NPB = require('./NPB');
const NBA = require('./NBA');
const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('schedules');
collection.remove().then(() => db.close());

MLB();
MLS5();
MLS6();
EPL();
LaLiga();
SerieA();
BuldesLiga();
KBL();
Ligue1();
KBO();
KLeagueChallenge();
KLeagueClassic();
NPB();
NBA();
