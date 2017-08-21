/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from './footer';
import ResList from "./ResList";
import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import RestFilter from './RestaurantFilter'
import "../css/home.css"

class Home extends React.Component {
    render() {
        return <div className="home-container">
            <TopNav/>
            <MiddleNav/>
            <RestFilter/>
            <ResList/>
            <Footer />
        </div>
    }
}
export default Home;