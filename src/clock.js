import React, { Component } from 'react';
/*import Clock from 'react-digital-clock';*/
import './clock.css';

class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

componentDidMount() {
this.timerID = setInterval(
() => this.tick(),
1000
);
}

componentWillUnmount() {
clearInterval(this.timerID);
}

tick() {
this.setState({
date: new Date()
});
}

render() {
return (

<table>
<tbody>
<tr>
<th>
<h2 >{this.state.date.toLocaleTimeString()}.</h2>
</th>
</tr>
</tbody>
</table>

);
}   
}
export default Clock;