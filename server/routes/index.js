var express = require('express');
var router = express.Router();

/* GET common page. */
router.get('/', function (req, res, next) {
    // console.log("index");
    // console.log(__dirname);
    console.log(req.session);
    console.log(req.cookies);
    res.render('index');
});

module.exports = router;
