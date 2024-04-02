import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={classes.dialogItem}>
            <div className={classes.item + ' ' + classes.active}><img className={classes.avatar} src="https://w7.pngwing.com/pngs/761/651/png-transparent-avatar-cloud-crying-rain-avatars-xmas-giveaway-icon.png"/><NavLink to={"dialogs/" + props.id}>{props.name}:</NavLink></div>
        </div>
    );
};

const Message = (props) => {
    return (
            <div className={classes.message}>{props.message}</div>
    );
};


const Dialogs = () => {
    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Anton"    id="1" />
                <DialogItem name="Nikolays" id="2" />
                <DialogItem name="Viktoria" id="3" />
                <DialogItem name="Sveta"    id="4" />
                <DialogItem name="Andrey"   id="5" />
                <DialogItem name="Sergey"   id="6" />
            </div>
            <div className={classes.messages}>
               <Message message="Yo my friends" />
               <Message message="Yo my friends" />
               <Message message="Hello" />
               <Message message="Yo my friends" />
            </div>
       </div>
    );
}











export default Dialogs;