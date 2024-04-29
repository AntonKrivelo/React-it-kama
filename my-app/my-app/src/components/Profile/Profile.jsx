import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div className={classes.content}>
            <div className={classes.bgContent}>
                <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg" />
            </div>
            <ProfileInfo name="Anton K." birthday="29 May" city="Minsk" education="BSU" />
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} 
            updateNewPostText={props.updateNewPostText}
            />
        </div>  
    );
};


export default Profile;