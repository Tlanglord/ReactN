/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/common.css'
import '../css/food.css'

export default class Food extends React.Component {

    render() {
        return <div className="food">
            <div className="food-img-wrap">
                <img src="http://p1.meituan.net/210.0/wmproduct/a1106fc3d9f181fb208d643f7344525c117828.jpg"
                     className="food-img"/>
            </div>
            <div className="food-space">
                <span className="food-span">油条</span>
            </div>
            <div className="food-space">
                <span className="food-span">月售（130）</span>
            </div>
            <div className="food-space">
                <span className="food-span">¥50</span>
                <span className="fr">已售完</span>
            </div>
        </div>
    }
}




