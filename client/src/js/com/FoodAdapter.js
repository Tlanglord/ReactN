/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from 'react';
import Food from './Food';
import '../css/common.css'
import '../css/foodadapter.css'

export default class FoodAdapter extends React.Component {

    render() {


        var foods = [];
        for (var i = 0; i < 5; i++) {
            foods.push(<Food/>)
        }

        return <div className="fl">
            <div className="food-adapter-dvd"></div>
            <h1 className="food-adapter-h1">test</h1>
            {foods}
        </div>
    }
}




