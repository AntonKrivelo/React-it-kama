import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props) => {
  

  return (
        <div className="app-wrapper">
            <Header />
            <Nav state={props.state.sideBar} />
            <Routes>
              <Route path="/profile" element={ <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost} updateNewPostText={props.updateNewPostText}
               />}
              
              />
             
              <Route path="/dialogs/*" element={ <Dialogs state={props.state.messagesPage} updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage} />}/>
              <Route path="/news" element={<News newsPage={props.state.newsPage} />}/>
              <Route path="/music" element={<Music />}/>
              <Route path="/settings" element={<Settings />}/>          
            </Routes>
        </div>
  );
} 



export default App;

