import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
            <header className={classes.header}>
            
            <NavLink> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" /> </NavLink>            
            <div><i className="fi fi-sr-eclipse"></i></div>
                
           
            </header>
            
    )
}



export default Header;