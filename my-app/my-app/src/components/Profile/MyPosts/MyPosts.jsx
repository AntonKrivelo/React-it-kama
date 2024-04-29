import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} counter={p.counter} id={p.id} />);

    let newPostElement = React.createRef(); 

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText = ('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts :</div> 
                <div className={classes.forms}>
                    
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder="My new post..." className={classes.textArea} value={props.newPostText}  />
                
                    <button onClick={addPost} className={classes.button}>Send</button>
                </div> 
                    {postElements}
            </div>  
    );
}






export default MyPosts;