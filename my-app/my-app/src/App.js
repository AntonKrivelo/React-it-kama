import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';



const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
    </div>
  );
} 



export default App;

