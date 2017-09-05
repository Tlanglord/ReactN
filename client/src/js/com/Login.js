/**
 * Created by dongqiangqiang on 2017/9/5.
 */
import React from 'react'
import '../css/login.css'
import '../css/common.css'

export default class Login extends React.Component {
    render() {
        return <div className="login-container">
            <div className="login">
                <header className="login-header-wrap">
                    <a href="/" className="fl login-header"></a>
                </header>
                <div className="login-body">
                    <div className="login-left">
                        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/waimai.png" width="480"
                             height="370" alt="美团外卖"></img>
                    </div>
                    <div className="fr login-right">
                    </div>
                </div>
                <footer></footer>
            </div>
        </div>
    }
}