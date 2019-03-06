import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-132054959-3');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
