/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import './css/restaurant.css'
import '../../css/common.css'
import Comment from './Comment';

export default class CommentList extends React.Component {

    render() {

        var comments = [];
        for (var i = 0; i < 20; i++) {
            comments.push(<Comment/>);
        }

        return <div >
            <ul>
                {comments}
            </ul>
        </div>
    }
}




