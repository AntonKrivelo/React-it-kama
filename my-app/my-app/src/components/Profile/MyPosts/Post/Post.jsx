import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    
    return (
        <div className={classes.main}>
            <div className={classes.item}>
                <img className={classes.avatar} src="https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig" />
                <div className={classes.post}>{props.message}</div>
                <div className={classes.like}><button className={classes.btnLikes}><i className="fa fa-heart"></i> {props.counter}</button></div>
        
            </div>
        </div>
    );
}











export default Post;