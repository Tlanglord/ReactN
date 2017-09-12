var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log("index");
    // console.log(__dirname);
    console.log("session" + req.session);
    res.render('index');
});

module.exports = router;
