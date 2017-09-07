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
        const {poi} = this.props;
        var url = "/restaurant?"+ "poiId="+ poi.poiId ;
        return (
            <li className="resItem-box">
                <a href={url}>
                    <div className="resItem-content">
                        <img className="res-img"
                             src={poi.picUrl}/>
                        <div className="res-name label-style">{poi.name}</div>
                        <div>评分</div>
                        <div className="resItem-bottom">
                            <div className="label-style">起送 ￥20</div>
                            <div className="label-style">配送费 ￥8</div>
                            <div className="label-style"><i className="timer-icon"></i>30分钟</div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}
