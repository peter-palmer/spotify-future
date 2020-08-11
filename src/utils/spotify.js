const authEndpoint = 'https://accounts.spotify.com/authorize/';
const redirectUri = 'http://localhost:3000';
// Get the client ID from the dashboard
const clientId = '45a3b1ff6b2b4de29f5dcf39e0c94df8';
// List of available scopes: https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = ['user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state', 'user-top-read', 'user-modify-playback-state'];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true `;

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			// access_token=<...>
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};
