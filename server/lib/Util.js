/**
 * Created by dongqiangqiang on 2017/9/12.
 */

var jwt = require('jsonwebtoken');

exports.genToken = function (name, key, time) {
    return jwt.sign(name, "1234");
}