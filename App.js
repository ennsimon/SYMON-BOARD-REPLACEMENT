import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './InductionBoard.js';
import InductionBoard from './InductionBoard.js';
import Clock from './clock.js';
class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        showView: false,
        header_data:["Induction Station ID","Associate ID","Induction Rate", "No Read Rate"],
        chart_data:[
          {'STATN':"IS11",'ASID':" ",'INRATE':0,'NK':0},
          {'STATN':"IS12",'ASID':" ",'INRATE':0,'NK':0},
          {'STATN':"IS13",'ASID':" ",'INRATE':0,'NK':0},
          {'STATN':"IS14",'ASID':" ",'INRATE':0,'NK':0},
          {'STATN':"IS15",'ASID':" ",'INRATE':0,'NK':0},
          {'STATN':"IS16",'ASID':" ",'INRATE':0,'NK':0}          

      ]
        
    }
  }
  render() {
    return (
      <div className="App">
        

        <InductionBoard h_data={this.state.header_data} cdata={this.state.chart_data}/>
        
        

         </div>
);
  }
}

export default App;