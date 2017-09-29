/**
 * Created by dongqiangqiang on 2017/9/4.
 */

var poilist = require('../routes/rest/poilist');
var my = require('../routes/my/my');
var loc = require('../routes/loc');

exports.config = function (app) {
    app.use(poilist);
    app.use(my);
    app.use(loc);
}