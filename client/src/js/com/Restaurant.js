/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/restaurant.css'
import '../css/common.css'
import TopNav from './TopNav';
import RestInfo from './RestInfo';

class Restaurant extends React.Component {
    render() {
        var id = this.props.location.query;
        console.log("queryid->" + id);
        return <div>
            <TopNav/>
            <RestInfo/>
        </div>;
    }
}
export default Restaurant;

