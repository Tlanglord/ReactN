/**
 * Created by wangpei on 2017/9/7 0007.
 */
var express = require('express');
var router = express.Router();
var redis = require('redis');
var User = require('../../lib/User');
var Util = require('../../lib/Util');
var client = redis.createClient();

router.post('/api/account', function (req, res, next) {
    client.on('error', function (err) {
        console.log("err:" + err);
    })
    console.log(req.body);
    var obj = {'name': req.body.name, 'pass': req.body.code};
    var user = new User(obj);
    user.save(function (err) {
        if(err){
             return res.redirect("/");
        }

        res.cookie('username',user.name);
        res.cookie('access_token', Util.genToken(user.name, '1234', new Date()))
        res.redirect("back");
    })
});

module.exports = router;