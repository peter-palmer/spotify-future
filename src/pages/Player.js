import React from 'react';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import PlayerBar from '../components/PlayerBar';
import { BrowserRouter } from 'react-router-dom';

function Player({ spotify }) {
	return (
		<div className='d-flex'>
			<BrowserRouter>
				<Sidebar />
				<Body />
				<PlayerBar spotify={spotify} />
			</BrowserRouter>
		</div>
	);
}

export default Player;
