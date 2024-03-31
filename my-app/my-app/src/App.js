import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter >
        <div className="app-wrapper">
            <Header />
            <Nav />


            <Routes>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/dialogs" element={<Dialogs />}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
} 



export default App;

