/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../css/product.css'

class ProductDetailsItem extends React.createClass {

    render() {
        return <li className="fl rest-li">
            <a class="rest-atag" href="" target="_blank">
                <div class="top-content">
                    <div class="preview">
                        <img  class="scroll-loading"
                             src="http://p1.meituan.net/xianfu/1c74dbc03cd9f71b5fa1ac257d54afbc126487.jpg"/>
                            <div class="rest-tags"/>
                    </div>
                    <div class="content">
                        <div class="name">
                                <span title="东北家常菜(望京店)">东北家常菜(望京店)</span>
                        </div>
                        <div class="rank clearfix">
                                <span class="star-ranking fl">
                                    <span class="star-score" style="width: 63px"></span>
                                </span>
                                <span class="score-num fl">4.3分</span>
                        </div>
                        <div class="price">
                            <span class="start-price">起送:￥20</span>
                            <span class="send-price">配送费:￥9</span>
                            <span class="send-time"><i class="icon i-poi-timer"></i>33分钟</span>
                        </div>
                    </div>
                    {/*<div class="clear"></div>*/}
                </div>
            </a>
        </li>;
    }
}
export default ProductDetailsItem;