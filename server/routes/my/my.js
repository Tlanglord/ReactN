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

        console.log("id:" + user.id);
        console.log("token:" + user.token);
        res.cookie("access_token", user.token, {maxAge: 1000 * 60 * 60 * 24});
        console.log("name:" + user.name);
        res.cookie("uid", user.id);
        res.cookie("username", user.name);
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
            res.cookie("username", user.name);
            res.cookie("uid", user.id);
            res.redirect("/");
        })
    })
});

router.get('/api/logout', function (req, res, next) {

    var uid = req.cookies.uid;
    User.logout(uid, function (err) {
        if (!err) {
            res.cookie("username", "", {maxAge: 0});
            res.cookie("uid", "", {maxAge: 0});
            res.cookie("access_token", "", {maxAge: 0});
        }
        res.redirect("/");
    })

})

var apiHedader = '/api/my/';
var api_order = apiHedader + 'order/';

router.get(api_order, function (req, res, next) {

});

module.exports = router;