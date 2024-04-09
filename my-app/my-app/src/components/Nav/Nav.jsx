import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";


const Nav = (props) => {
    
    return (
        <nav className={classes.nav}>
            <div><NavLink to="/profile" className={classes.item + ' ' + classes.active}><i className="fi fi-rr-user"></i>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={classes.item}><i className="fi fi-rr-envelope"></i>Messages</NavLink></div> 
            <div><NavLink to="/news" className={classes.item}><i className="fi fi-rr-calendar"></i>News</NavLink></div> 
            <div><NavLink to="/music" className={classes.item}><i className="fi fi-rr-megaphone"></i>Music</NavLink></div> 
            <div><NavLink to="/settings" className={classes.item}><i className="fi fi-rr-settings"></i>Settings</NavLink></div>
            <Friends friendsData={props.state.friendsData} />
        </nav>
    );
}

export default Nav;