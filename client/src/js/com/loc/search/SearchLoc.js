/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./searchloc.css"


class LocItem extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick(loc, event) {
        var that = this;
        console.log("onclick");
    }

    render() {
        const {loc} = this.props;
        var that = this;
        return <li className="loc-li-item" onClick={this.handleClick.bind(this, loc)}></li>
    }
}

class SearchLoc extends React.Component {

    handleInputChange(event){
        var input = this.refs.search_input;
        var keyword = input.value;
        console.log(keyword);
    }

    render() {
        return <div className="search-container">
            <div className="search">
                <div className="address">
                    <div className="fl current-city">
                        <a href="javascript:;"><span>北京</span></a>
                    </div>
                    <div className="fl">
                        <input ref="search_input" type="text" placeholder="输入地址搜索周边美食" className="fl address-input" onChange={this.handleInputChange.bind(this)}
                               autoComplete="off"></input>
                        <a href="javascript:;" className="fl search-btn">搜索</a>
                    </div>
                </div>
                <div className="address">
                    <ul className="loc-ul">
                        {<LocItem/>}
                        {<LocItem/>}
                        {<LocItem/>}
                    </ul>
                </div>
            </div>
        </div>
    }
}


export default SearchLoc;