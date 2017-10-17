/**
 * Created by dongqiangqiang on 2017/7/3.
 */
import React from "react";
import '../../css/comment.css'
import '../css/common.css'

class Replay extends React.Component {

    render() {
        return <div className="comment-reply">
            这家伙很懒什么都没写，不过我们推测应该吃的挺嗨。
        </div>
    }
}

export default class Comment extends React.Component {

    render() {
        return <li className="comment">
            <div className="comment-user-logo">
            </div>
            <div className="comment-content">
                <div>
                    <span className="comment-span">kkkkk</span>
                    <span className="comment-span">******</span>
                    <span className="comment-span">好评</span>
                    <span className="fr">2017-2-10</span>
                </div>
                <Replay/>
            </div>
        </li>
    }
}




