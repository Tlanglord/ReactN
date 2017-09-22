/**
 * Created by dongqiangqiang on 2017/7/24.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import CookieUtil from '../uitls/CookieUtil'
import '../css/topnav.css'
import '../css/common.css'

class TopNav extends React.Component {

    handleLoginChanged(login) {
        var loginDiv = ReactDOM.findDOMNode(this.refs.login_div);
        var logOutDiv = ReactDOM.findDOMNode(this.refs.logout_div);
        var userName = ReactDOM.findDOMNode(this.refs.user_name);
        debugger
        if (login) {
            // loginDiv.className()
            loginDiv.className = "fl gone";
            logOutDiv.className = "fl visible";
            userName.innerHTML = CookieUtil.get("username");
        } else {
            loginDiv.className = "fl visible";
            logOutDiv.className = "fl gone";
        }
    }

    componentDidMount() {
        var token = CookieUtil.get("access_token");
        var isLogin = false;
        debugger
        //typeof token === 'String' ||
        if (token != undefined && token != null && token != "") {
            isLogin = true;
        }
        console.log(token);
        this.handleLoginChanged(isLogin);
    }

    render() {
        return <div className="top-container">
            <div className="top-nav">
                <div className="fr">
                    <div className="fl" ref="login_div">
                        <a className="fl" href="/register">注册</a>
                        <span className="fl top-login-dvd">|</span>
                        <a className="fl" href="/login">登录</a>
                    </div>
                    <div className="fl gone" ref="logout_div">
                        <a href="/api/logout">退出</a>
                        <a ref="user_name" href="/userinfo">用户名</a>
                    </div>
                    <a className="top-ml20">手机版</a>
                    <a className="top-ml20">美团网</a>
                    <a className="top-ml20">联系我们</a>
                </div>
                <div className="fl">
                    <i className="fl top-loc"/>
                    <span className="fl top-ml10 top-loc-bg">北京</span>
                    <span className="fl ">
                        <span className="fl top-ml10 top-loc-bg ">望京，来广营</span>
                        <span className="fl top-dvd  top-loc-bg top-ml10">|</span>
                        <a href="/location"><span className="fl top-ml10  top-loc-bg top-addr-change">切换地址</span></a>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default TopNav;
