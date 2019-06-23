import React, { Component } from 'react';

import './WaveBoard.css';



class WaveBoard extends Component {
  render() {

    var listItems = this.props.cdata.map(function(item) {
      return ( 
        <tr>
            <td>{item["WAVE"]}</td>
            <td>{item["PKD"]}</td>
            <td>{item["SRT"]}</td>
            <td>{item["MT"]}</td>
            <td>{item["CHT"]}</td>
            <td>{item["DUR"]}</td>
        </tr>
      ); 
    }); 

    return (
      <div >
        <table  align="center" id="WaveBoard" width="1000">
          <tbody>
              
            <tr id="WaveHeader">
              <th>{this.props.h_data[0]}</th>
              <th>{this.props.h_data[1]}</th>
              <th>{this.props.h_data[2]}</th>
              <th>{this.props.h_data[3]}</th>
              <th>{this.props.h_data[4]}</th>
              <th>{this.props.h_data[5]}</th>
            </tr>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}


  export default WaveBoard;