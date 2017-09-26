/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react';
import "../css/searchloc.css"

class SearchLoc extends React.Component {

    render() {
        return <div className="search-container">
            <div className="search">
                <div className="address">
                    <div className="fl current-city">
                        <a href="javascript:;"><span>北京</span></a>
                    </div>
                    <div className="fl">
                        <input type="text" placeholder="输入地址搜索周边美食" className="fl address-input"
                               autoComplete="off"></input>
                        <a href="javascript:;" className="fl search-btn">搜索</a>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default SearchLoc;