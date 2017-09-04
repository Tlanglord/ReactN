/**
 *
 * title: ResList.js
 *
 * author: WangPei.
 *
 * date: 2017/7/30.
 *
 */
import React, {Component} from "react" ;
import {connect} from 'react-redux';
import ResItem from "./ResItem"
import {reqPoilist, fetchPoilist}from '../action/ResItemAction';
import "../css/resList.css"
class ResList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPoilist());
    }

    render() {
        const {data, code, msg} = this.props;
        console.log(JSON.stringify(data, null, 4));
        console.log(code);
        console.log(msg);
        let rs = [];
        if (data != null) {
            var poiList = data.poiList;
            for (let i = 0; i < poiList.length; i++) {
                rs.push(<ResItem key={i} poi={poiList[i]}/>);
            }
        }
        return (
            <ul className="resList-box">
                {rs}
            </ul>
        );
    }
}

ResList.PropTypes = {
    poilist: {}
}

function select(state = {}) {
    return {
        data: state.data,
        code: state.code,
        msg: state.msg
    }
}

export default connect(select)(ResList);