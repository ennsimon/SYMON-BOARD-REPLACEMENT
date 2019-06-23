import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './WaveBoard.js';
import WaveBoard from './WaveBoard';
class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        showView: false,
        header_data:["Pick Wave","Pick %","Sorted %", "Message Totes", "Completed Chutes","Pick Wave Duration"],
        chart_data:[
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0},
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0},
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0},
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0},
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0},
          {'WAVE':0,'PKD':0.3,'SRT':0.3,'MT':0,'CHT':0,'DUR':0}          
          
      ]
        
    }
  }
  render() {
    return (
      <div className="App">
        
        <WaveBoard h_data={this.state.header_data} cdata={this.state.chart_data}/>

         </div>
);
  }
}

export default App;