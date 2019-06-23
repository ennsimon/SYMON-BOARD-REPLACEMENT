import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/* added code */
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
/* added code*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();