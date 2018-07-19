import React, { Component } from 'react';

import './OverdueBoard.css';



class OverdueBoard extends Component {
    render() {

      var listItems = this.props.cdata.map(function(item) {
        return ( 
          <tr>
              <td>{item["blk"]}</td>
              <td>{item["cmpt"]}</td>
              <td>{item["dur"]}</td>
          </tr>
        ); 
      }); 

 return (
        <div >
          <table  align="center" id="SorterTable" width="1000">
            <tbody>
                
              <tr id="SorterHeader">
                <th>{this.props.h_data[0]}</th>
                <th>{this.props.h_data[1]}</th>
                <th>{this.props.h_data[2]}</th>
              </tr>
              {listItems}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  
  export default OverdueBoard;