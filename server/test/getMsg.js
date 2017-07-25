/**
 *
 * Created by dongqiangqiang on 2017/7/25.
 */

var MessageList = [

    {"Message": "Hello React"},

    {"Message": "Hello Webpack"},

    {"Message": "Hello Nodejs"},

    {"Message": "Hello Express"}

];

exports.getMessageList = function (callback) {
    callback(MessageList);
};

// export function getMessageList(callback) {
//     callback(MessageList);
// }
