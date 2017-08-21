/**
 * Created by dongqiangqiang on 2017/7/3.
 */


import React from 'react';
import '../css/restfilter.css'
import '../css/common.css'

class RestaurantFilter extends React.Component {
    render() {
        return <div className="rs-f-container">
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
            <div className="fl rs-f-tab">商家分类</div>
        </div>;
    }
}

export default RestaurantFilter;

// if(module.hot){
//     module.hot.accept();
// }