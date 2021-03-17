import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Login from "./Components/Login"

// isLoggedIn = Login.prototype.state.isLoggedIn

ReactDOM.render(
  <BrowserRouter>
    <App isLoggedIn={true} />
  </BrowserRouter>,
  document.getElementById('root')
);
