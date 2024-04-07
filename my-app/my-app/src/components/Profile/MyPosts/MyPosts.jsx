import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} counter={p.counter} id={p.id} />);

    let newPostElement = React.createRef(); 

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts :</div> 
                <form className={classes.forms}>
                    <textarea ref={newPostElement} placeholder="My new post..." className={classes.textArea}></textarea>
                    <button onClick={addPost} className={classes.button}>Send</button>
                </form> 
                    {postElements}
            </div>  
    );
}






export default MyPosts;