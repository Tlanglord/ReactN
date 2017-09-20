/**
 * Created by dongqiangqiang on 2017/9/4.
 */

import 'whatwg-fetch';

export const REQ_POILIST_START = "request_poilist_start";
export const REQ_POILIST_SUCC = "request_poilist_succ";

export function reqPoilist(lat, lng) {
    console.log("reqPoilist");
    return {type: REQ_POILIST_START, lat, lng};
}

export function recvPoilist(json) {
    return {type: REQ_POILIST_SUCC, data: json};
}

export function fetchPoilist() {
    return function (dispatch) {
        dispatch(reqPoilist(1, 1));
        return fetch("http://localhost:3000/api/poilist")
            .then(function (response) {
                var json = response.json();
                return json;
            }).then(function (json) {
                // console.log(JSON.stringify(json));
                dispatch(recvPoilist(json));
            });
    }
}