import React from "react";
import classes from "./Friends.module.css";
import FriendsItems from "./FriendsItems/FriendsItems";

const Friends = (props) => {


    let friendsData =  [
        {name: "Nastya", id: 1},
        {name: "Vika", id: 2},
        {name: "Sveta", id: 3},
    ];

    let friendsElements = friendsData.map(item => <FriendsItems name={item.name} id={item.id} /> );

    return (
        <div className={classes.header}>
            Friends:
                
            <div className={classes.friendsItems}>
                {friendsElements}
            </div>
        </div>
       
    );
};


export default Friends;