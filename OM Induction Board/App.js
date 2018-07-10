import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './OMLeftTable.js';
import OMLeftTable from './OMLeftTable.js';
import OMRightTable from './OMRightTable.js';
import Clock from './Clock.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        < OMLeftTable />
        
        
        <OMRightTable />
        < Clock />
         </div>
);
  }
}

export default App;