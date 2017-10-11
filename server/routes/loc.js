/**
 * Created by dongqiangqiang on 2017/9/28.
 */
var fs = require('fs');
var path = require('path')
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ResModel = require('../lib/ResModel');

// {
//     method: 'GET',
//         header: {'Access-Control-Allow-Origin': '*'},
//     mode: 'cors',
// }http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=jjnIWmMv51I11HGSCsaGLrKGsKNmRGgj
// http://api.map.baidu.com/place/v2/search?q=%E9%A5%AD%E5%BA%97&region=%E5%8C%97%E4%BA%AC&output=json&ak=7pAytQK4uAIzFge4gpuIRUs6nilfGDL9
//http://api.map.baidu.com/place/v2/suggestion?query=%E8%9E%8D%E5%88%9B%E5%8A%A8%E5%8A%9B%E4%BA%A7%E4%B8%9A%E5%9B%AD&region=%E5%8C%97%E4%BA%AC%E5%B8%82&city_limit=true&output=json&ak=XkqU0LoYUAL3eSA7FQbNYEYZGEdQ0z42
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};

router.get('/api/search', function (req, res, next) {
    fetch('http://api.map.baidu.com/location/ip?ak=7pAytQK4uAIzFge4gpuIRUs6nilfGDL9')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            const err = new Error(res.statusText);
            err.response = res;
            throw err;
        })
        .then(function (json) {
            console.log(json);
            var rm = new ResModel();
            rm.setResCode(0);
            rm.setResData(json);
            rm.setResMsg("调用成功");
            res.json(rm);
        })
        .catch(function (err) {
            console.log(err);
            res.send(err);
        });
})

router.get('/api/locIP', function (req, res, next) {
    var ip = getClientIp(req);
    try {
        console.log(req.connection.remoteAddress);
        console.log(req.socket.remoteAddress);
        console.log(req.connection.socket);
        console.log(req.header('X-Real-IP'));
        console.log(req.header('x-forwarded-for'));
    } catch (err) {
        console.log(err);
    }
    fetch('http://api.map.baidu.com/location/ip?ak=7pAytQK4uAIzFge4gpuIRUs6nilfGDL9')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            const err = new Error(res.statusText);
            err.response = res;
            throw err;
        })
        .then(function (json) {
            console.log(json);
            res.json(json);
        })
        .catch(function (err) {
            console.log(err);
            res.send(err);
        });

    // fetch("http://api.map.baidu.com/place/v2/search?q=饭店&region=北京&output=json&ak=jjnIWmMv51I11HGSCsaGLrKGsKNmRGgj",
    //     {
    //         method: 'GET'
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         if (response.ok) {
    //             return res.send(response.json());
    //         }
    //
    //         const error = new Error(response.statusText);
    //         error.response = response;
    //         throw error;
    //     })
    //     .catch(function (err) {
    //         // debugger
    //         console.log(err);
    //         res.send(err);
    //     });
});
module.exports = router;