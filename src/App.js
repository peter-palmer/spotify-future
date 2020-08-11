import React, { useEffect } from 'react';
import { getTokenFromResponse } from './utils/spotify';
import Login from './pages/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/Player';
import { useDataLayerValue } from './DataLayer';

// Create new spotify web api object
const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	// Execute on window.location changes
	useEffect(() => {
		// Get the token from the URL
		const hash = getTokenFromResponse();

		// Set the token to the state (hash is an object)
		let _token = hash.access_token;

		if (!_token) {
			_token = localStorage.getItem('token');
		}

		if (_token) {
			// Set the token into our Reducer
			console.log(_token);

			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			// Save the token into the Local Storage
			localStorage.setItem('token', _token);

			// Set the token to the Spotify Library
			spotify.setAccessToken(_token);

			// Save the spotify Object in the Context API
			dispatch({
				type: 'SET_SPOTIFY_OBJECT',
				spotify: spotify,
			});

			// Get the user has logged in and save it into the Data Layer
			spotify.getMe().then((user) => {
				// Dispatch the action
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			spotify.getPlaylist('37i9dQZEVXcWIOOr34Yh6R').then((response) => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				});
			});

			spotify.getMyCurrentPlayingTrack().then((response) => {
				dispatch({
					type: 'SET_MY_CURRENT_PLAYING_TRACK',
					current_playing_track: response,
				});
			});

			spotify.setVolume(90);
		}
		// Clean the URL
		window.location.hash = '';
	}, []);

	// Handle if user is logged in
	return <>{token ? <Player spotify={spotify} /> : <Login />}</>;
}

export default App;
