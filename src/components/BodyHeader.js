import React from 'react';
import { Search } from 'react-feather';
import { useDataLayerValue } from '../DataLayer';
import './BodyHeader.scss';

function BodyHeader() {
	const [{ user, token }, dispatch] = useDataLayerValue();
	return (
		<div className='row pb-4'>
			<div className='col-lg-6 my-auto'>
				<div className='input-group'>
					<div className='input-group-prepend'>
						<span className='input-group-text' id='basic-addon1'>
							<Search size={15} />
						</span>
					</div>
					<input type='text' className='form-control' placeholder='Search for songs, artists, etc.' aria-label='Username' aria-describedby='basic-addon1' />
				</div>
			</div>
			<div className='col-lg-6 text-right my-auto'>
				<img
					src={user?.images[0].url || 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}
					className='img-fluid round bodyHeader__avatar mr-2'
					alt='Profile'
				/>
				<p className='text-muted d-inline-block m-0 my-auto'>{user?.display_name}</p>
			</div>
		</div>
	);
}

export default BodyHeader;
