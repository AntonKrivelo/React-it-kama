import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts :</div> 
                <form className={classes.forms}>
                    <textarea className={classes.textArea}></textarea>
                    <button className={classes.button}>Send</button>
                </form> 
                <Post />
                <Post />
            </div>  
    );
}






export default MyPosts;