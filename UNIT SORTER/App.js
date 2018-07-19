import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './OverdueBoard.js';
import OverdueBoard from './OverdueBoard.js';
import clock from './clock.js';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        showView: false,
        header_data:["Blocked Chutes","Complete","Duration"],
        chart_data:[
          {'blk':17,'cmpt':10,'dur':22},
          {'blk':18,'cmpt':11,'dur':23},
          {'blk':15,'cmpt':10,'dur':6},
          {'blk':9,'cmpt':10,'dur':10},
          {'blk':60,'cmpt':13,'dur':20}
          
      ]
        
    }
  }
  render() {
    return (
      <div className="App">
      
          <OverdueBoard h_data={this.state.header_data} cdata={this.state.chart_data}/>
         < clock />
      </div>
    );
  }
}

export default App;