import React from "react";
import classes from "./Friends.module.css";
import FriendsItems from "./FriendsItems/FriendsItems";

const Friends = (props) => {

let friendsElements = props.friendsData.map(f => <FriendsItems name={f.name} id={f.id} /> );

    return (
        <div className={classes.friendsNav}>
           <div className={classes.friends}> <i className="fi fi-rr-users"></i>Friends:</div> 
            <div className={classes.friendsItems}>
                {friendsElements}
            </div>
        </div>
       
    );
};


export default Friends;