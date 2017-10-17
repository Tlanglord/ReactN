/**
 * Created by dongqiangqiang on 2017/7/3.
 */

import React from 'react';
import Footer from './product/Footer';
import ResList from "./product/ResList";
import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import 'whatwg-fetch';
import "../css/home.css"
import LocationUtil from '../uitls/LocationUtil';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {locPostion: ""};
    }

    componentDidMount() {
        LocationUtil.getLocation(function (position) {
            if (position) {
            } else {
                fetch("http://localhost:3000/api/locIP")
                    .then(function (response) {
                        console.log(response);
                        if (response.ok) {
                            return response.json();
                        }
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    })
                    .then(function (json) {

                    }).catch(function (err) {
                    console.log(err);
                });
            }
        })
    }

    render() {

        document.title = "welcome"
        return <div className="home-container">
            <TopNav/>
            {/*<MiddleNav/>*/}
            <ResList/>
            {/*<Footer />*/}
        </div>
    }
}
export default Home;