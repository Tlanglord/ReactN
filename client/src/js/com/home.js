/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from 'footer';
import RestaurantList from 'client/src/js/com/restaurantlist';
import Search from 'search';


class Home extends React.createClass {
    render() {
        return <div>
            <Search/>
            <Restaurant/>
            <Footer/>
        </div>
    }
}
export default Home;