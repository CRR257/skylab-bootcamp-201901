import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import spotifyApi from './Spotify_Api/spotify-api.js'

spotifyApi.token = 'BQAEI-ThLZ_bkZ5Eqpu7m7u_sYGl3TovQcEwpq3w8P5M88mUvKjGPdOzcVp4lXVP9XPiX-bbysmyEeCvUwNg_pyxInoVuQONYyYn0R_KE6lSECX6h9AHdDVZSdUgdYwL-L9KyBZX-nmG-nJP5uIxaCJxAC7tHZe5iQ'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

