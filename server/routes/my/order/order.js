/**
 * Created by dongqiangqiang on 2017/10/17.
 */
var express = require('express');
var fs = require('fs');
var path = require('path')

var router = express.Router();
var ResModel = require('../../../lib/ResModel');

var apiHedader = '/api/my/';
var api_order = apiHedader + 'order/';

router.get(api_order, function (req, res, next) {
    console.log(req.url)
    var rm = new ResModel();
    var json = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../..') + "/json/orderlist.json"));
    rm.setResCode(0);
    rm.setResData(json);
    rm.setResMsg("调用成功")
    res.json(rm);
});

router.get('/api/orderlist', function (req, res, next) {
    res.send(null);
});

module.exports = router;
