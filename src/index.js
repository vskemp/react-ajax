import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Asyncronous- JavaScript- And- XML "fetch"*/

// import axios from 'axios';
// const API_ENDPOINT= 'https://swapi.co/api/people/1/';

// axios.get(API_ENDPOINT)
//     .then(response => {
//         console.log(response);
//     })


// without axios, just fetch
// fetch(API_ENDPOINT)
//     .then(r => r.json())
//     .then(data => {
//         console.log(data);
//     })



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
