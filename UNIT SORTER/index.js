import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import clock from './clock.js';

/* added code */
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
/* added code*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();