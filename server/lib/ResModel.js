/**
 * Created by dongqiangqiang on 2017/10/11.
 */

function ResModel() {

    this.setResData = function (data) {
        this.data = data;
    }

    this.setResCode = function (code) {
        this.code = code;
    }

    this.setResMsg = function (msg) {
        this.msg = msg;
    }
}

module.exports = ResModel;