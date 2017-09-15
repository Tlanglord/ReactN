/**
 * Created by wangpei on 2017/9/7 0007.
 */
var express = require('express');
var router = express.Router();
var redis = require('redis');
var User = require('../../lib/User');
var Util = require('../../lib/Util');
var client = redis.createClient();

router.post('/api/login', function (req, res, next) {
    client.on('error', function (err) {
        console.log("err:" + err);
    })
    console.log(req.body);
    var uname = req.body.name;
    var upass = req.body.code;

    User.authenticate(upass, uname, function (err, user) {

        if (err) {
            console.log(err);
            return res.redirect("/");
        }

        console.log("id:"+ user.id);
        console.log("token:"+ user.token);
        res.cookie("access_token", user.token, {maxAge: 1000 * 60 * 60 * 24});
        console.log("name:"+ user.name);
        res.cookie("uid", user.name);
        res.redirect("/");
    })

});


router.post('/api/register', function (req, res, next) {
    client.on('error', function (err) {
        console.log("err:" + err);
    })
    console.log(req.body);
    var uname = req.body.name;
    var upass = req.body.code;

    var obj = {name: uname, pass: upass};
    var user = new User(obj);

    user.save(function (err) {
        if (err) {
            return res.redirect("/");
        }

        User.authenticate(upass, uname, function (err, user) {
            if (err) {
                return res.redirect("/");
            }
            res.cookie("access_token", user.token, {maxAge: 1000 * 60 * 60 * 24});
            res.cookie("uid", user.name);
            res.redirect("/");
        })
    })

});

module.exports = router;