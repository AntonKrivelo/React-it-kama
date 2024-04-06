import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));


let postsData = [
  {message:"hello my friends, my name is Anton", counter: 18, id:1},
  {message:"hi, how are you?", counter: 20, id:2},
];

let dialogsData = [
  {name: "Anton", id: 1},
  {name: "Nikolays", id: 2},
  {name: "Viktoria", id: 3},
  {name: "Sveta", id: 4},
  {name: "Andrey", id: 5},
  {name: "Sergey", id: 6},
];

let messagesData = [
  {message: "Hi!", id: 1},
  {message: "How are you?", id: 2},
  {message: "Thank you", id: 3},
  {message: "Hello", id: 4},
  {message: "My friend", id: 5},
];

root.render(


  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);


reportWebVitals();

