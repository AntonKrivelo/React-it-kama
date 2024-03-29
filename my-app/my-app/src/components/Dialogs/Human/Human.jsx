import React from "react";
import classes from './Human.module.css';

const Human = (props) => {
    return (
        <div className={classes.humanName}>
            <span className={classes.header}>Dialogs:</span>
            <div className={classes.human}>
                <span className={classes.name}>{props.name}</span>
            </div>
        </div>
    );
}



export default Human;