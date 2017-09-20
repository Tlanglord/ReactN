/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/restaurant.css'
import '../css/common.css'
import TopNav from './TopNav';
import RestInfo from './RestInfo';
import Tab from  './tab/Tab';
import CommentList from './CommentList';
import FoodList from './FoodList';
import RestQualification from './RestQualification';

class ResTab extends React.Component {
    render() {
        var title = this.props.title;
        return <div className="rest-tab">{title}</div>;
    }
}

class Restaurant extends React.Component {
    render() {
        var id = this.props.location.query;
        console.log("queryid->" + id);
        var tabs = [];
        tabs.push(<ResTab title={"菜单"}/>);
        tabs.push(<ResTab title={"评价"}/>);
        tabs.push(<ResTab title={"食品安全档案"}/>);

        var contents = [];
        contents.push(<CommentList/>);
        contents.push(<FoodList/>);
        contents.push(<RestQualification/>);

        return <div>
            <TopNav/>
            <div className="rest-content">
                <RestInfo/>
                <Tab Tabs={tabs} Contents={contents} />
            </div>
        </div>
    }
}

export default Restaurant;




