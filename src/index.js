import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from '.images'

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssstyle={};

if(curDate >= 1 && curDate<12){
  greeting ='Good Morning';
  cssstyle.color ='purple';
}
else if (curDate>=12 && curDate <19) {
  greeting = 'Good Afternoon';
  cssstyle.color ='red';
} else {
  greeting = 'Good Night';
  cssstyle.color ='grey';
}
ReactDOM.render(
  <h1>HEY,<span style={cssstyle}> {greeting}</span></h1>,
  document.getElementById('root')
);

reportWebVitals();
