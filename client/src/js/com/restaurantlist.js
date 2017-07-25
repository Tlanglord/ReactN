/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import Restaurant from './restaurant';
import '../css/restaurantlist.css'

class RestaurantList extends React.Component {

    render() {
        let rs = [];
        for (let i = 0; i < 20; i++) {
            rs.push(<Restaurant/>);
        }
        return <div className="page-wrap">
            <ul>{rs}</ul>
        </div>;
    }
}
export default RestaurantList;