import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.mainContent}>
                
                <div className={classes.avatar}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU" />
                </div>
                <div className={classes.mainInformation}>
                    <div className={classes.name}> <span>Name:</span> {props.name}</div>
                    <div className={classes.birth}> <span>Date of Birth:</span> {props.birthday}</div>
                    <div className={classes.city}> <span>City:</span> {props.city}</div>
                    <div className={classes.education}> <span> Education:</span> {props.education}</div>
                </div>
        </div>
    );
};


export default ProfileInfo;