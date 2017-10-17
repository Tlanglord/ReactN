/**
 * Created by dongqiangqiang on 2017/9/4.
 */

var poilist = require('./rest/poilist');
var my = require('./my/my');
var loc = require('./loc');
var order = require('./my/order/order');

exports.config = function (app) {
    app.use(poilist);
    app.use(my);
    app.use(loc);
    app.use(order);
}