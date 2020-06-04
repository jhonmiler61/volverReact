/* const element = document.createElement('h1');
element.innerText = 'Hello, soy Miler';
const container = document.getElementById('root');

container.appendChild(element); */
import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import './global.css';


const container= document.getElementById('root');


ReactDOM.render(<Badge />, container);
