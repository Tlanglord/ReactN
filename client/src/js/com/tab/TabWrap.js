/**
 * Created by dongqiangqiang on 2017/9/8.
 */
import React from 'react'
import '../../css/common.css'


export default class TabWrap extends React.Component {


    render() {
        const {Tab, onSelect, Pos} = this.props;
        // onClick={onSelect(Pos)}
        return <div className="fl">
            {Tab}
        </div>
    }
}