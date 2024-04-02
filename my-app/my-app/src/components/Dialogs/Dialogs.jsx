import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = () => {
    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.item + ' ' + classes.active}><img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/1">Anton:</NavLink></div>
                <div className={classes.item}> <img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/2">Sveta:</NavLink></div>
                <div className={classes.item}> <img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/3">Nikolays:</NavLink></div>
                <div className={classes.item}> <img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/4">Viktoria:</NavLink></div>
                <div className={classes.item}> <img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/5">Petr:</NavLink></div>
                <div className={classes.item}> <img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to="dialogs/6">Mishka:</NavLink></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
                <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elnt naimi sequi accusantium labor.</div>
            </div>
       </div>
    );
}











export default Dialogs;