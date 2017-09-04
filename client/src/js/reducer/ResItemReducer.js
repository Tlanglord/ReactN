/**
 * Created by dongqiangqiang on 2017/9/4.
 */
import {REQ_POILIST_START, REQ_POILIST_SUCC} from '../action/ResItemAction'

export default function poilist(state, action) {
    switch (action.type) {
        case REQ_POILIST_START:
            // console.log("poilist");
            // var poilist = Object.assign({}, {
            //     poilist: {
            //         "poiId": 100948939399393,
            //         "name": "田师傅",
            //         "picUrl": "http: //img.test.com/test.png",
            //         "star": 4.5,
            //         "deliveryTime": 40,
            //         "shippingTime": "20:30-20:50",
            //         "expressFee": 5,
            //         "min_price": 20
            //     }
            // })
            // console.log(poilist);
            return state;
        case REQ_POILIST_SUCC:
            return Object.assign({}, action.data);
    }
};
