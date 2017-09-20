/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/restaurant.css'
import '../css/common.css'
import TopNav from './TopNav';
import RestInfo from './RestInfo';
import Tab from  './tab/Tab';

class ResTab extends React.Component {
    render() {
        var title = this.props.title;
        debugger
        return <div>title</div>;
    }
}
;


class Restaurant extends React.Component {
    render() {
        var id = this.props.location.query;
        console.log("queryid->" + id);
        var tabs = [];
        tabs.push(<ResTab title={"菜单"}/>);
        tabs.push(<ResTab title={"评价"}/>);
        tabs.push(<ResTab title={"食品安全档案"}/>);
        return <div>
            <TopNav/>
            <RestInfo/>
            <Tab Tabs={tabs}/>
        </div>
    }
}
;

export default Restaurant




