/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import Restaurant from './restaurant';

class RestaurantList extends React.Component {

    render() {
        let rs = [];
        for (let i = 0; i < 20; i++) {
            rs.push(<Restaurant/>);
        }
        return <div>
            <ul>{rs}</ul>
        </div>;
    }
}
export default RestaurantList;