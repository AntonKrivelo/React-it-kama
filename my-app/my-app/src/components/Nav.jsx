import React from "react";
import './Nav.css';


const Nav = () => {
    return (
        <nav className="nav">
            <div><a>Profile</a></div>
            <div><a>Messages</a></div> 
            <div><a>News</a></div> 
            <div><a>Music</a></div> 
            <div><a>Settings</a></div>
        </nav>
    );
}

export default Nav;