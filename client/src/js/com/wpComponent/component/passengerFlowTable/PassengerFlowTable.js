/**
 *
 * title: PassengerFlowTable.js
 *
 * author: WangPei.
 *
 * date: 2017/9/6.
 *
 */
import React, {Component} from "react"
import "./passengerFlowTable.less"
export default class PassengerFlowTable extends Component {
    state = {
        data: [
            {
                "ranking": "1",
                "regionName": "北京",
                "passengerFlow": "25万"
            },
            {
                "ranking": "2",
                "regionName": "天津",
                "passengerFlow": "11万"
            },
            {
                "ranking": "3",
                "regionName": "上海",
                "passengerFlow": "25万"
            },
            {
                "ranking": "4",
                "regionName": "重庆",
                "passengerFlow": "20万"
            },
            {
                "ranking": "5",
                "regionName": "黑龙江",
                "passengerFlow": "21万"
            },
            {
                "ranking": "6",
                "regionName": "吉林",
                "passengerFlow": "25万"
            }
        ]
    }

    render() {
        var data = this.state.data;
        if (data.length > 0) {
            var trs = data.map((d, index) =>
                <tr>
                    <td>{d.ranking}</td>
                    <td>{d.regionName}</td>
                    <td>{d.passengerFlow}</td>
                </tr>)
        }
        return (
            <table className="pas-flow-table">
                <thead>
                <tr className="pas-flow-table-thead-tr">
                    <td>排名</td>
                    <td>流入省份</td>
                    <td>客流量</td>
                </tr>
                </thead>
                <tbody className="pas-flow-table-tbody">
                {trs}
                </tbody>
            </table>
        );
    }
}