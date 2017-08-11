/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from './footer';
// import RestaurantList from './restaurantlist';
// import Search from './search';
import ResList from "./ResList";
import "../css/home.css"

class Home extends React.Component {
    render() {
        return <div className="home-container">
            <ResList/>
            {/*<Search />*/}
            {/*<RestaurantList />*/}
            {/*<Footer />*/}
        </div>
    }
}
export default Home;