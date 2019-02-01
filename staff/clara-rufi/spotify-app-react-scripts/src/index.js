import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import spotifyApi from './Spotify_Api/spotify-api.js'

spotifyApi.token = 'BQD0WIhufDA0TPbJd-P1e1QShuiE5NHteUUohX42o3yQjXWcYST5-j-djScNSMECrYZ1ng3CNrXb0DmrAb2umaEpWrqh7JV4IXW4CjIGcjpU9aeaI45cryKNsySdtuwVDfBGl7W-PbzA_6pZWB17dRiCmftdRPXFpA'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

