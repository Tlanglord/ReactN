/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from './footer';
import RestaurantList from './restaurantlist';
import Search from './search';


class Home extends React.Component {
    render() {
        return <div>
            {/*<Search />*/}
            <RestaurantList />
            <Footer />
        </div>
    }
}
export default Home;