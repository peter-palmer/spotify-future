import React from 'react';
import './SidebarOption.scss';
import { Link } from 'react-router-dom';

function SidebarOption({ title, Icon, link, playlist }) {
	return (
		<div className='sidebarOption d-flex align-items-center'>
			{Icon && <span className='my-auto mr-4'>{Icon}</span>}
			{Icon ? (
				<Link to={link}>
					<p className='d-inline-block mb-0 menu textLink'>{title}</p>{' '}
				</Link>
			) : (
				<Link to={`/playlist/${playlist?.id}`} className='playlist'>
					{title}
				</Link>
			)}
		</div>
	);
}

export default SidebarOption;
