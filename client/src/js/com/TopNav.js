/**
 * Created by dongqiangqiang on 2017/7/24.
 */

import React from 'react'
import '../css/topnav.css'
import '../css/common.css'

class TopNav extends React.Component {
    render() {
        return <div className="top-container">
            <div className="top-nav">
                <div className="fr">
                    <div className="fl">
                        <a className="fl">注册</a>
                        <span className="fl top-login-dvd">|</span>
                        <a className="fl">登录</a>
                    </div>
                    <a className="top-ml20">手机版</a>
                    <a className="top-ml20">美团网</a>
                    <a className="top-ml20">联系我们</a>
                </div>
                <div className="fl">
                    <i className="fl top-loc"/>
                    <span className="fl top-ml10">北京</span>
                    <span className="fl">
                        <span className="fl top-ml10">望京，来广营</span>
                        <span className="fl top-dvd top-ml10">|</span>
                        <span className="fl top-ml10 top-addr-change">切换地址</span>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default TopNav;
