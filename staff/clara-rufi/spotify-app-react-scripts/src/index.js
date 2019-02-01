import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import spotifyApi from './Spotify_Api/spotify-api.js'

spotifyApi.token = 'BQAYDx7UKV0EpMyljKzkOfJqDwKRZtX4eGPzdts0GVctg8ArPKIGjRrbXf-ztd8VpXO_7tKBYQzEMKGgdFuAGex0450zVZbg58Z5Ic4HrlFILeIpN_aPHkF6a_ZrwGNxnjzPX78VfPGKSsBYx_-ABcEtq0gFTfNAhw'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

