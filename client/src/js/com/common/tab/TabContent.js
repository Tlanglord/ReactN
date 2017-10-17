/**
 * Created by dongqiangqiang on 2017/9/8.
 */
import React from 'react'
import '../../../css/tab.css'


export default class TabContent extends React.Component {

    render() {
        const {Content} = this.props;
        return <div className="tab-content">
            {Content}
        </div>
    }
}