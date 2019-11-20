import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inicio from './Components/Inicio';
import * as serviceWorker from './serviceWorker';
//Importando brouser
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Inicio><BrowserRouter><App /></BrowserRouter></Inicio>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
