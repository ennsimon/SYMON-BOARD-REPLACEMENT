import React, { Component } from 'react';

import './InductionBoard.css';



class InductionBoard extends Component {
    render() {
      
      
      var listItems = this.props.cdata.map(function(item) {   
      return (
        <tr>
        <td>{item["STATN"]}</td>
        <td>{item["ASID"]}</td>
        <td>{item["INRATE"]}</td>
        <td>{item["NK"]}</td>

    </tr>
  ); 
});  

return (
  <div >
    <table  align="center" id="InductionBoard" width="1000">
      <tbody>
          
        <tr id="InductionHeader">
          <th>{this.props.h_data[0]}</th>
          <th>{this.props.h_data[1]}</th>
          <th>{this.props.h_data[2]}</th>
          <th>{this.props.h_data[3]}</th>
        </tr>
        {listItems}
      </tbody>
    </table>
  </div>
      );
    }
  }
  
  export default InductionBoard;