/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import FoodAdapter from './FoodAdapter';
import '../../css/common.css'
import '../css/foodlist.css'

export default class FoodList extends React.Component {

    render() {
        return <div >
            <div className="food-list-nav">
                <ul>
                    <li className="fl food-list-item">招牌爆品</li>
                    <li className="fl food-list-item">营养套餐</li>
                    <li className="fl food-list-item">单品煲仔</li>
                    <li className="fl food-list-item">精选小食</li>
                </ul>
            </div>

            <FoodAdapter/>
            <FoodAdapter/>
        </div>
    }
}




