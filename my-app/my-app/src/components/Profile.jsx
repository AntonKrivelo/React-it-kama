import React from "react";
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <div className="bg-content">
              <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg" />
            </div>
            <div className="main-content">
              <div className="avatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU" />
              </div>
              <div className="main-information">
                  <div className="name"> <span>Name:</span> Anton K.</div>
                  <div className="birthday"> <span>Date of Birth:</span> 29 May</div>
                  <div className="city"> <span>City:</span> Minsk</div>
                  <div className="education"> <span> Education:</span> BSU</div>
              </div>
            </div>
            <div className="my-posts">
                 <div className="header-posts">My posts :</div> 
                  <form className="info-forms">
                      <textarea className="textArea"></textarea>
                      <button className="button">Send</button>
                  </form> 
              </div>  
        </div>  
    );
}


export default Profile;