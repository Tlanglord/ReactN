/**
 * Created by dongqiangqiang on 2017/7/3.
 */


import React from 'react';
import '../css/restinfo.css'
import '../css/common.css'

class RestInfo extends React.Component {
    render() {
        return <div className="rest-ct">
            <div className="rest-wrap">
                <div className="fl rest-into-base">

                </div>
                <div className="rest-info-fav"></div>
            </div>
        </div>;
    }
}

export default RestInfo;

// if(module.hot){
//     module.hot.accept();
// }