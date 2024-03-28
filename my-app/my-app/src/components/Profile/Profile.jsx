import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.bgContent}>
              <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg" />
            </div>
            <div className={classes.mainContent}>
                <div className={classes.avatar}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU" />
                </div>
                <div className={classes.mainInformation}>
                    <div className={classes.name}> <span>Name:</span> Anton K.</div>
                    <div className={classes.birth}> <span>Date of Birth:</span> 29 May</div>
                    <div className={classes.city}> <span>City:</span> Minsk</div>
                    <div className={classes.education}> <span> Education:</span> BSU</div>
                </div>
            </div>
            <div className={classes.myPosts}>
                 <div className={classes.posts}>My posts :</div> 
                  <form className={classes.forms}>
                      <textarea className={classes.textArea}></textarea>
                      <button className={classes.button}>Send</button>
                  </form> 
            </div>  
        </div>  
    );
}


export default Profile;