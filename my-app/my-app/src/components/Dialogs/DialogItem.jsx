import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    return(
        <div className={classes.dialogItem}>
            <div className={classes.item + ' ' + classes.active}><img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to={"dialogs/" + props.id}>{props.name}:</NavLink></div>
        </div>
    );
};



export default DialogItem;