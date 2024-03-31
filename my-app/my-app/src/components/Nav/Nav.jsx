import React from "react";
import classes from "./Nav.module.css";


const Nav = () => {
    return (
        <nav className={classes.nav}>
            
            <div><a href="/profile" className={classes.item}><i class="fi fi-rr-user"></i>Profile</a></div>
            <div><a href="/dialogs" className={classes.item}><i class="fi fi-rr-envelope"></i>Messages</a></div> 
            <div><a className={classes.item}><i class="fi fi-rr-calendar"></i>News</a></div> 
            <div><a className={classes.item}><i class="fi fi-rr-megaphone"></i>Music</a></div> 
            <div><a className={classes.item}><i class="fi fi-rr-settings"></i>Settings</a></div>
        </nav>
    );
}

export default Nav;