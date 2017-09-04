/**
 * Created by dongqiangqiang on 2017/9/4.
 */

var poilist = require('../routes/poilist')

exports.config = function (app) {
    app.use(poilist);
}