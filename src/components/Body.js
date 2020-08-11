import React from 'react';
import './Body.scss';
import BodyHeader from './BodyHeader';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Playlist from '../pages/Playlist';

function Body({ spotify }) {
	return (
		<div className='body'>
			<BodyHeader />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/playlist/:id' component={Playlist} spotify={spotify} />} />
			</Switch>
		</div>
	);
}

export default Body;
