var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET common page. */
router.get('/', function (req, res, next) {
    // console.log("index");
    // console.log(__dirname);
    console.log(req.session);
    console.log(req.cookies);
    console.log(req);
    console.log("log : " + req.app);
    console.log("log : " + req.baseUrl);
    console.log("log : " + req.hostname);
    console.log("log : " + req.ip);
    console.log("log : " + req.ips);
    console.log("log : " + req.originalUrl);
    console.log("log : " + req.path);
    console.log("log : " + req.protocol);
    console.log("log : " + req.query);
    console.log("log : " + req.route);
    console.log("log : " + req.secure);
    // var file = path.resolve(__dirname, '../../') + '/client/build'+ req.originalUrl;
    // console.log(file);
    // res.sendfile(file);

    res.render('index');
    // fs.readFileSync(path.resolve(__dirname, '..') + '/json/category.json')
    // res.renderFile()
});

module.exports = router;
