/**
 * Created by dongqiangqiang on 2017/7/24.
 */

import React from 'react'
import '../css/middlenav.css'
import '../css/common.css'

class MiddleNav extends React.Component {
    render() {
        return <div className="middle-nav-contianer">
            <div className="middle-nav">
                <div className="fl middle-logo ">
                    <a href="/" title="----">
                        <img src="http://xs01.meituan.net/waimai_web/img/logos/logo.png" alt="----"/>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default MiddleNav
;
