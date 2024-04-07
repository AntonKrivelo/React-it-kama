import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.mainContent}>
                
                <div className={classes.avatar}>
                    <img src="https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig" />
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