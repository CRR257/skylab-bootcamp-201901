import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import spotifyApi from './Spotify_Api/spotify-api.js'

spotifyApi.token = 'BQD61DG1eO0zY-nziTcQXdXwjhmiK4YCsxqMpwE6QucBxIhYYOfRdVPk9ueqcRoQgqSBtyjhDTJ-AA3iqiOr23e2h7qR2TUrtVtbvUSgKgWtaB4D2opk4DJ0-aqQ7DsqaXfmj8RdJwCzlBR9nn2a8XreeQQCldRrKw'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

