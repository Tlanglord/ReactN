/**
 *
 * title: ResList.js
 *
 * author: WangPei.
 *
 * date: 2017/7/30.
 *
 */
import React ,{Component} from "react" ;
import ResItem from "./ResItem"
import "../css/resList.css"
export default class ResList extends Component{
    render(){
        let rs = [];
        for (let i = 0; i < 20; i++) {
            rs.push(<ResItem key={i}/>);
        }
        return(
            <ul className="resList-box">
                {rs}
            </ul>
        );
    }
}

