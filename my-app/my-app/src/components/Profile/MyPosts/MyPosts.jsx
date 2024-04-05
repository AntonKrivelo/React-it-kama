import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {


    let postData = [
        {message:"hello my friends, my name is Anton", counter:"15", id:1},
        {message:"hi, how are you?", counter:"20", id:2},
    ];


    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts :</div> 
                <form className={classes.forms}>
                    <textarea placeholder="My new post..." className={classes.textArea}></textarea>
                    <button className={classes.button}>Send</button>
                </form> 
                <Post message={postData[0].message} counter={postData[0].counter} id={postData[0].id} />
                <Post message={postData[1].message} counter={postData[1].counter} id={postData[1].id} />
            </div>  
    );
}






export default MyPosts;