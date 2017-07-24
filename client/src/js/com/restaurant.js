/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/restaurant.css'
class Restaurant extends React.Component {
    render() {
        return <li className="fl rest-li">
            <a>
                <div>
                    <div >
                        <img
                            src="http://p1.meituan.net/xianfu/1c74dbc03cd9f71b5fa1ac257d54afbc126487.jpg"/>
                    </div>
                    <div>
                        <div>
                            <span title="东北家常菜(望京店)">东北家常菜(望京店)</span>
                        </div>
                        <div class="clearfix">
                                <span class="fl">
                                    <span></span>
                                </span>
                            <span class="fl">4.3分</span>
                        </div>
                        <div>
                            <span >起送:￥20</span>
                            <span >配送费:￥9</span>
                            <span ><i ></i>33分钟</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>;
    }
}
export default Restaurant;

