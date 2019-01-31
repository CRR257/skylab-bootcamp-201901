import React from 'react';
import ReactDOM from 'react-dom';
import '../src/bulma/css/bulma.css';
import '../src/index.sass'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import spotifyApi from './spotify-api-1.0.0';

spotifyApi.token = 'BQBybmaSwgu7rDtTZ6mxYWGktz3vCkqSlWhcAA7vy6ROFrGbWmDBTEQct15XjZWThxN6DY4f3ccl9h8fmw0UtX-F-rjDYiZjmtt3zzqnnlGGi86mWN2dLq4dnYH1YLB044U-DfWCUeLAUjpdUg';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
