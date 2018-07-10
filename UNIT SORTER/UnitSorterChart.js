import React, { Component } from 'react';
import './UnitSorterChart.css';

class UnitSorterChart extends Component {
    render() {
      return (
        <div >
          <table  align="center" id="SorterTable" width="1000">
            <tbody>
                
              <tr>
                <td>BLKCHT</td>
                <td>COMPLT</td>
                <td>DUR</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0:00</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0:00</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0:00</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0:00</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default UnitSorterChart;