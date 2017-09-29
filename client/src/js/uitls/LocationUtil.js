/**
 * Created by dongqiangqiang on 2017/9/29.
 */

var locationUtil = {
    getLocation: function (fn) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(fn);
        }else{
            fn(null);
        }
    }
}
export default locationUtil;