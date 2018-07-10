import React, { Component } from 'react';

import './InductionBoard.css';



class InductionBoard extends Component {
    render() {
      return (
        <div >
          <table  align="left" id="leftTable">
            <tbody>
              <tr>
                <th>SRTD</th>
                <td>1000</td>
              </tr>
              <tr>
                <th>OCCRTNS</th>
                <td>545</td>
              </tr>
              <tr>
                <th>AvgBufln</th>
                <td>44</td>
              </tr>
              <tr>
                <th>Srate1</th>
                <td>12</td>
              </tr>
              <tr>
                <th>Srate2</th>
                <td>13</td>
              </tr>
              <tr>
                <th>Ttl Rat</th>
                <td>67</td>
              </tr>
              <tr>
                <th>CompCht1</th>
                <td>109</td>
              </tr>
              <tr>
                <th>CompCht2</th>
                <td>12</td>
              </tr>
              <tr>
                <th>AvChts 1</th>
                <td>6</td>
              </tr>
              <tr>
                <th>AvChts 2</th>
                <td>156</td>
              </tr>
              <tr>
                <th>BlkChts</th>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default InductionBoard;