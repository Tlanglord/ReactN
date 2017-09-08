/**
 * Created by dongqiangqiang on 2017/7/3.
 */


import React from "react";
import "../css/restinfo.css";
import "../css/common.css";

class RestInfo extends React.Component {
    render() {
        return <div className="rest-ct">
            <div className="rest-wrap">
                <div className="fl rest-into-base">
                    <div className="fr rest-info-price">
                        <div className="fl rest-price-ml">
                            <div>平均送餐时间</div>
                            <div className="rest-time-top">
                                <strong className="rest-strong">40</strong>分钟
                            </div>
                        </div>

                        <div className="fl rest-price-ml">
                            <div>起送</div>
                            <div className="rest-time-top">
                                <strong className="rest-strong">20</strong>元
                            </div>
                        </div>

                        <div className="fl rest-price-ml">
                            <div>配送费</div>
                            <div className="rest-time-top">
                                <strong className="rest-strong">5</strong>元
                            </div>
                        </div>
                    </div>

                    <div className="detail">
                        <div >
                            <div className="avatar fl">
                                <img
                                    src="http://p0.meituan.net/120.0/xianfu/991e5edee9642423d5e635fcba59a3b046736.jpg"></img>
                            </div>

                            <div className="fl n-mt">
                                <div>
                                    <span>金百万</span>
                                </div>
                            </div>
                        </div>
                        {/*<div className="rest-over down-wrap">*/}
                        {/*<div>*/}
                        {/*<p></p>*/}
                        {/*<p>地址</p>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*<p></p>*/}
                        {/*<p>地址</p>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*<p></p>*/}
                        {/*<p>地址</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="rest-info-fav"></div>
            </div>
        </div>;
    }
}

export default RestInfo;

// if(module.hot){
//     module.hot.accept();
// }