import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component {
  render(){
    return (
      <div className="my-background">
        <img src={logo} lat="logo"/>
        <h2>Let's develop management system!</h2>  
      </div>
    );
  }
}

export default App;