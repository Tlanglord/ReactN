/**
 *
 * title: ResItem.js
 *
 * author: WangPei.
 *
 * date: 2017/7/30.
 *
 */
import React, {Component} from 'react';
import "../css/resItem.css";


export default class ResItem extends Component {
    render() {
        return (
            <li className="resItem-box">
                <div className="resItem-content">
                    <img className="res-img" src="http://p1.meituan.net/xianfu/1c74dbc03cd9f71b5fa1ac257d54afbc126487.jpg"/>
                    <div>东北家常菜（望京分店）</div>
                    <div>评分</div>
                    <div className="resItem-bottom">
                        <div>起送 ￥20</div>
                        <div>配送费 ￥8</div>
                        <div><i className="timer-icon"></i>30分钟</div>
                    </div>
                </div>

            </li>
        );
    }
}
