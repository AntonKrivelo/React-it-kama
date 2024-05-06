import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/redux/state';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
  
export let rerenderEntireTree = (state) => {

  root.render(

    <React.StrictMode>
      <BrowserRouter >
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>

  );
}