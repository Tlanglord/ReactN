/**
 * Created by wangpei on 2017/9/7 0007.
 */
var express = require('express');
var router = express.Router();
var redis = require('redis');
var User = require('../lib/User');
var client = redis.createClient(6379,'127.0.0.1', {});

router.post('/api/account', function (req, res, next) {
    // console.log(JSON.stringify(poiList, null, 4));
    // res.send(poiList);
    client.on('error', function (err) {
        console.log("err:" + err);
    })

    client.set('user:id',10086, redis.print);
    console.log(req.body);
    var log = req.body;

    //6379
    debugger
    // var account = JSON.parse(req.body);

    User.get(log.name);
});

module.exports = router;