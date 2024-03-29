import React from "react";
import classes from "./Dialogs.module.css";
import Human from "./Human/Human";


const Dialogs = () => {
    return (
        <div className={classes.menu}>
            <Human name="Antonio K." />
                <div className={classes.messages}>
                    <span className={classes.header}>Messages:</span>
                    <div className={classes.messageBlock}>
                        <img className={classes.avatar} src="https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig" />
                        <span className={classes.message}>Hi my friends</span>
                    </div>
                </div>
                
        </div>
        
    );
}











export default Dialogs;