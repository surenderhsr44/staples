import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App message="this message is a parameter123"/>, document.getElementById('root'));
registerServiceWorker();
