import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../DataLayer';
import { Plus } from 'react-feather';
import Song from '../components/Song';

function Playlist({ match }) {
	const [{ spotify }, dispatch] = useDataLayerValue();
	const [playlist, setPlaylist] = useState();
	useEffect(() => {
		spotify.getPlaylist(match.params.id).then((playlist) => {
			setPlaylist(playlist);
			console.log(playlist);
		});
	}, [match]);
	return (
		<div className=''>
			<div className='row mb-4'>
				<div className='col-lg-3'>
					<img src={playlist?.images[0]?.url} className='shadow round-sm w-100 img-fluid' alt='Playlist Cover' />
				</div>
				<div className='col-lg-9 my-auto'>
					<small className='text-uppercase text-muted'>Playlist • {playlist?.tracks?.total} tracks</small>
					<h1>
						<strong>{playlist?.name}</strong>
					</h1>
					<p className='text-muted'>{playlist?.description}</p>
					<button className='btn btn-primary text-white'>
						<Plus size={14} className='mr-2' />
						Follow
					</button>
				</div>
			</div>
			{playlist?.tracks?.items?.map((track, index) => (
				<Song track={track.track} />
			))}
		</div>
	);
}

export default Playlist;
