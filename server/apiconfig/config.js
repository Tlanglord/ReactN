/**
 * Created by dongqiangqiang on 2017/9/4.
 */

var poilist = require('../routes/rest/poilist')
var my = require('../routes/my/my')

exports.config = function (app) {
    app.use(poilist);
    app.use(my);
}