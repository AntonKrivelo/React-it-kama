import React from "react";
import classes from "./FriendsItems.module.css";


const FriendsItems = (props) => {
    return (
        <div className={classes.friendsItems}>
                <div className={classes.item}>
                    <img className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaqegmQmQ0mpmWlNnLUKQXBmz65TAjYUk2w&s" />
                    <div className={classes.name}>
                        {props.name} 
                    </div>
                </div>
        </div>
    );
};


export default FriendsItems;