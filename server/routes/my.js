/**
 * Created by wangpei on 2017/9/7 0007.
 */
var express = require('express');
var router = express.Router();
var redis = require('redis');
var User = require('../lib/User');
var client = redis.createClient(6379,'127.0.0.1', {});

router.post('/api/account', function (req, res, next) {
    client.on('error', function (err) {
        console.log("err:" + err);
    })
    console.log(req.body);
    var obj = {'name': req.body.name, 'pass': req.body.code};
    var user = new User(obj);
    user.save(function (err) {
        if(err){
             return res.send("");
        }
        res.send("ok");
    })
});

module.exports = router;