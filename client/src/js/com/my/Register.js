/**
 * Created by dongqiangqiang on 2017/9/5.
 */
import React from 'react'
import '../../css/login.css'
import '../css/common.css'

export default class Register extends React.Component {
    render() {
        document.title = "登录";
        return <div className="login-container">
            <div className="login">
                <header className="login-header-wrap">
                    <a href="/" className="fl login-header"></a>
                </header>
                <div className="login-body">
                    <div className="fl login-left">
                        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/waimai.png" width="480"
                             height="370" alt="美团外卖"></img>
                    </div>
                    <div className="fl login-right">
                        <form action="/api/register" method="POST">
                            <div className="login-field">
                                <i className="login-icon login-phone-icon"></i>
                                <input type="text" name="name" placeholder="请输入您的手机号" className="login-text"></input>
                            </div>
                            <div className="login-field">
                                <i className="login-icon login-code-icon"></i>
                                <input type="text" name="code" placeholder="密码" className="login-text"></input>
                            </div>

                            <div className="login-field">
                                <input type="submit"  className="login-submit" value="注册"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <footer></footer>
            </div>
        </div>
    }
}