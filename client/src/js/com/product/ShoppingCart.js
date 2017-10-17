/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../../css/common.css'
import '../css/shoppingcart.css'

export default class ShoppingCart extends React.Component {

    render() {
        return <div className="shopping-cart">
            <form>
                <div className="shopping-footer">
                    <div className="fr">
                        <a className="shopping-ready-pay">差<span>20</span>元起送</a>
                        <input className="shopping-go" type="submit" value="立即下单"/>
                    </div>
                </div>
            </form>
        </div>
    }
}




