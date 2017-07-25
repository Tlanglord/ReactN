/**
 * Created by dongqiangqiang on 2017/7/25.
 */

var getMessageList = require('./getMsg');

// import getMessageList from './getMsg';

exports.execute = function (req, res) {
    getMessageList.getMessageList(function (data) {
        res.send(data);
    });
};