/**
 * Created by dongqiangqiang on 2017/9/8.
 */
import React from 'react'
import TabWrap from "./TabContent";


export default class Tab extends React.Component {

    Tab() {
        this.contents=[];
    }

    handleSelect(pos) {

    }

    render() {
        const {Tabs, Contents, DefaultPos} = this.props;
        var tabs = [];
        if (Tabs != null) {
            for (let i = 0; i < Tabs.length; i++) {
                tabs.push(<TabWrap Tab={Tabs[i]} Pos={i} onSelect={this.handleSelect}/>);
            }
        }

        var contents = [];
        if (contents != null) {
            for (let i = 0; i < Contents.length; i++) {
                contents.push(<TabContent Content={Contents[i]} Pos={i}/>);
            }
        }

        return <div>
            {tabs}
            {contents}
        </div>
    }
}