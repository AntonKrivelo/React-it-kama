import React from "react";
import classes from "./Settings.module.css";


const Settings = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mySettings}>
                <span className={classes.headerSettings}>My Settings :</span>
                <form className={classes.formSettings} action="#">
                    <div className={classes.lightTheme}>
                        Light Theme - <button className={classes.btnLight}>Select Light Theme</button>
                    </div>
                    <div className={classes.darkTheme}>
                        Dark Theme - <button className={classes.btnDark}>Select Dark Theme</button>
                    </div>
                </form>
            </div>
            <div>Default</div>
        </div>
        
    );
};



export default Settings;