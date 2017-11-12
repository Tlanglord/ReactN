/**
 * Created by dongqiangqiang on 2017/7/3.
 */


import React from 'react';
import './css/footer.css'
import '../css/common.css'

class Footer extends React.Component {
    render() {
        return <div className="footer-container">
            <div className="ft-w">
                <ul className="fl ft-ul">
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                </ul>
                <ul className="fl ft-ul">
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                </ul>
                <ul className="fl ft-ul dashed-line">
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                    <li>我要开店</li>
                </ul>

                <div className="ft-s fl dashed-line">
                    <p>18392184857</p>
                    <p>周一至周日 9:00-23:00</p>
                    <p>客服不受理商务合作</p>
                </div>

                <div className="ft-qr fl">
                    <div className="ft-qrcode fl"></div>
                    <div className="fl">
                        <p>小程序下单</p>
                        <p>更多商家 更多优惠</p>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Footer;

// if(module.hot){
//     module.hot.accept();
// }