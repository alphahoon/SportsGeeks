var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var googleTrends = require('google-trends-api');
var moment = require('moment');
var async = require('async');
var fs = require('fs');

var timestamp = Date.now();
getTrendsWrapper();

function getTrendsWrapper() {
    console.log('Starting collecting trends...');
    var now = moment();
    var startTime = now.add(-7, 'hour')
        .toDate();
    var endTime = now.add(-1, 'hour')
        .toDate();

    var keywords = [];
    var keywords_input = fs.readFileSync('./keywords.txt', 'utf8')
        .split('\n')
        .filter(Boolean);
    for (var index = 0; index < keywords_input.length; index++) {
        keywords.push({
            name: keywords_input[index],
            trendsVal: 0
        });
    }
    //console.log(keywords);
    var ref = keywords[0].name;
    getTrends(ref, keywords, 1, 4, startTime, endTime, normalizeKeywords);
}

function getTrends(ref, keywords, begin, end, startTime, endTime, callback) {
    var five_keywords = [ref];
    for (var index = begin; index <= end; index++) {
        five_keywords.push(keywords[index].name);
    }
    console.log('Processing: [' + five_keywords + ']... (' + (keywords.length - end - 1) + ' left)');
    googleTrends.interestOverTime({
        keyword: five_keywords,
        startTime: startTime,
        endTime: endTime
    }, function (err, results) {
        if (err) {
            console.error('there was an error!', err);
            console.log(results);
        } else {
            //console.log(results);
            var averages = JSON.parse(results)['default'].averages;
            var averages_index = 1;
            if (begin == 1) {
                keywords[0].trendsVal = averages[0];
                for (var index = begin; index <= end; index++) {
                    keywords[index].trendsVal = averages[averages_index];
                    averages_index++;
                }
            } else {
                var multiply = keywords[0].trendsVal / averages[0];
                for (var index = begin; index <= end; index++) {
                    keywords[index].trendsVal = averages[averages_index] * multiply;
                    averages_index++;
                }
            }

            //console.log(begin, end);
            //console.log(averages);
            //console.log(keywords);

            var keywords_end = keywords.length - 1;
            var remains = keywords_end - end;
            if (remains >= 4) {
                getTrends(ref, keywords, begin + 4, end + 4, startTime, endTime, normalizeKeywords);
            } else if (remains > 0) {
                getTrends(ref, keywords, begin + 4, keywords_end, startTime, endTime, normalizeKeywords);
            } else {
                normalizeKeywords(keywords, storeKeywords);
            }
        }
    });
}

function normalizeKeywords(keywords, callback) {
    console.log('Normalizing keywords...');

    var max_index = 0;
    for (var index = 1; index < keywords.length; index++) {
        if (keywords[index].trendsVal > keywords[max_index].trendsVal)
            max_index = index;
    }

    var max_trendsVal = keywords[max_index].trendsVal;
    var multiply = 100 / max_trendsVal;
    for (var index = 0; index < keywords.length; index++) {
        keywords[index].trendsVal = parseInt(keywords[index].trendsVal * multiply);
    }

    keywords.sort(function (a, b) {
        return b.trendsVal - a.trendsVal;
    });

    for (var index = 0; index < keywords.length; index++) {
        keywords[index].rank = index + 1;
    }

    callback(keywords.splice(0, 30));
}

function storeKeywords(keywords) {
    console.log('\nkeywords: ');
    console.log(keywords);

    mongoose.connect('mongodb://localhost:27017/main/trends');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('mongodb connected!');

        db.db.listCollections({
                name: 'trends'
            })
            .next((err, collinfo) => {
                if (err) console.log(err);
                if (collinfo)
                    db.db.dropCollection('trends');

                var Trends = require('./models/trends.js');
                var objArr = [];
                for (var index = 0; index < keywords.length; index++) {
                    objArr.push(new Trends({
                        name: keywords[index].name,
                        trendsVal: keywords[index].trendsVal,
                        rank: keywords[index].rank
                    }));
                }
                console.log('Storing trends into mongodb');
                async.each(objArr, function (object, callback) {
                    object.save(function (err) {
                        if (err) {
                            callback(err)
                        } else {
                            callback()
                        }
                    });
                }, function (err) {
                    if (err) {
                        console.log(err);
                        db.close();
                    } else {
                        console.log('Updating trends completed!');
                        db.close();
                        var elapsedTime = (Date.now() - timestamp) / 1000;
                        console.log('Time elpased = ' + elapsedTime + ' sec');
                    }
                });
            });
    });
}
