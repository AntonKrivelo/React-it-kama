import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
            <header className={classes.header}>     
                <NavLink> <img className={classes.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" />      
            </NavLink>            
                <div className={classes.icon}> <i className="fi fi-rr-settings"></i></div>
            </header>
            
    )
}



export default Header;