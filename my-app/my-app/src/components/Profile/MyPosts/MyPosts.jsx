import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts :</div> 
                <form className={classes.forms}>
                    <textarea placeholder="My new post..." className={classes.textArea}></textarea>
                    <button className={classes.button}>Send</button>
                </form> 
                <Post messages="hello my friends, my name is Anton" counter="15" />
                <Post messages="hi, how are you?" counter="20" />
            </div>  
    );
}






export default MyPosts;