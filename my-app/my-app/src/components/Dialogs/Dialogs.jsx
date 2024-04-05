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

    let dialogsData = [
        {name: "Anton", id: 1},
        {name: "Nikolays", id: 2},
        {name: "Viktoria", id: 3},
        {name: "Sveta", id: 4},
        {name: "Andrey", id: 5},
        {name: "Sergey", id: 6},
    ];
    let messagesData = [
        {message: "Hi!", id: 1},
        {message: "How are you?", id: 2},
        {message: "Thank you", id: 3},
        {message: "Hello", id: 4},
        {message: "My friend", id: 5},
    ];

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messagesData.map(m => <Message message={m.message} id={m.id} /> );
   

   

    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
       </div>
    );
}











export default Dialogs;