// Empty data layer object (initial state)
export const initialState = {
	user: null,
	//token: 'BQAJDAkPvM3mL0ascr7AynCox6gn4bgBP6UdAXMk-pcw0YuMYb20sYuDTAQAsXDw6HImBv2xiPJnnYR1f3OGUWDNUopx_p117DCZBJmGDrqF9C30AC5FNYenLizLpCptaP36-fXDUTyA181X',
	playlists: [],
	playing: false,
	item: null,
};

const reducer = (state, action) => {
	console.log(action);

	// Action -> type, [payload]
	switch (action.type) {
		case 'SET_SPOTIFY_OBJECT':
			return { ...state, spotify: action.spotify };

		case 'SET_USER':
			return { ...state, user: action.user };

		case 'SET_TOKEN':
			return { ...state, token: action.token };

		case 'SET_PLAYLISTS':
			return { ...state, playlists: action.playlists };

		case 'SET_DISCOVER_WEEKLY':
			return { ...state, discover_weekly: action.discover_weekly };

		case 'SET_MY_CURRENT_PLAYING_TRACK':
			return { ...state, current_playing_track: action.current_playing_track };

		default:
			return state;
	}
};

export default reducer;
