/**
 * Created by dongqiangqiang on 2017/9/8.
 */
import React from 'react'
import TabWrap from "./TabWrap";
import TabContent from "./TabContent";
import '../../css/tab.css'

export default class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.contents = [];
        this.state = {pos: 0};
        // this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event, pos) {
        console.log(pos);
        this.setState({pos: pos});
    }

    render() {
        const {Tabs, Contents, DefaultPos} = this.props;
        var tabs = [];
        var pos = this.state.pos;
        if (Tabs != null) {
            for (let i = 0; i < Tabs.length; i++) {
                tabs.push(<TabWrap Tab={Tabs[i]} Pos={i} onSelect={this.handleSelect.bind(this)}/>);
            }
        }

        var contents = [];
        if (Contents != null) {
            for (let i = 0; i < Contents.length; i++) {
                if (pos == i) {
                    contents.push(<TabContent Content={Contents[i]} Pos={i}/>);
                }
            }
        }

        return <div className="tab">
            <div className="tab-wrap">
                {tabs}
            </div>
            {/*<div className="tab-dvd fl"/>*/}
            {contents}
        </div>
    }
}