/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/restaurant.css'
import '../css/common.css'
import TopNav from './TopNav';

class Restaurant extends React.Component {
    render() {

        debugger
        var id = this.props.location.query;
        debugger
        console.log("queryid->" + id);
        return <div>
            <TopNav/>
        </div>;
    }
}
export default Restaurant;

