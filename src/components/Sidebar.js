import React from 'react';
import './Sidebar.scss';
import { Home, Search, ShoppingBag, Clock, Heart, User, Disc } from 'react-feather';
import SidebarOption from './SidebarOption';
import SpotifyLogo from '../assets/img/Spotify-Logo.png';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();
	return (
		<div className='sidebar'>
			<img src={SpotifyLogo} className='img-fluid mb-3 sidebar__logo' alt='Spotify Logo' />
			<SidebarOption title={'Home'} link='/' Icon={<Home size={20} />} />
			<SidebarOption title={'Browse'} link='/browse' Icon={<Search size={20} />} />
			<SidebarOption title={'Library'} link='/library' Icon={<ShoppingBag size={20} />} />
			<small className='text-uppercase text-muted smallText'>Your Library</small>
			<div className='sidebar__separator' />
			<SidebarOption title={'Recently Played'} link='/recently-played' Icon={<Clock size={20} />} />
			<SidebarOption title={'Favorite Songs'} link='/favorite-songs' Icon={<Heart size={20} />} />
			<SidebarOption title={'Artists'} link='/artists' Icon={<User size={20} />} />
			<SidebarOption title={'Albums'} link='/albums' Icon={<Disc size={20} />} />
			<small className='text-uppercase text-muted smallText'>Playlists</small>
			<div className='sidebar__separator' />
			{playlists?.items?.map((playlist, index) => (
				<SidebarOption title={playlist.name} key={index} playlist={playlist} />
			))}
			<SidebarOption title={'My Playlist'} />
		</div>
	);
}

export default Sidebar;
