/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from 'footer';
import ProductDeatilsItem from 'productdetailsitem';
import Search from 'search';


class Home extends React.createClass {
    render() {
        return <div>
            <Search/>
            <ProductDeatilsItem/>
            <Footer/>
        </div>
    }
}
export default Home;