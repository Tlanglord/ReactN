/**
 *
 * Created by dongqiangqiang on 2017/9/4.
 */
var fs = require('fs');
var path = require('path')
var express = require('express');
var router = express.Router();


router.get('/api/poilist', function (req, res, next) {
    var poiList = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + "/json/poilist.json"));
    console.log(JSON.stringify(poiList, null, 4));
    res.send(poiList);
});

router.get('/api/category', function (req, res, next) {
    var cate = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/json/category.json'));
    console.log(JSON.stringify(cate, null, 4));
    res.send(cate);
})
module.exports = router;