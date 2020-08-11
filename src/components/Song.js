import React from 'react';
import './Song.scss';
import { useDataLayerValue } from '../DataLayer';
import { Heart } from 'react-feather';

function Song({ track }) {
	const [{ spotify }, dispatch] = useDataLayerValue();
	const handleClick = () => {
		console.log(track.album.id);
		//spotify.play(track.album.id);
	};

	const millisToMinutesAndSeconds = (millis) => {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};

	return (
		<div className='shadow p-3 mb-4 round-sm row'>
			<div className='col-lg-4'>
				<img src={track?.album?.images[0]?.url} alt={'Album Cover'} className='shadow song__img round mr-3 my-auto' onClick={() => handleClick()} />
				<p className='d-inline-block my-auto responsiveText'>{track?.name}</p>
			</div>
			<div className='col-lg-4 my-auto'>{track?.artists[0]?.name}</div>
			<div className='col-lg-4 my-auto'>
				<p className='d-inline-block my-auto'>{millisToMinutesAndSeconds(track?.duration_ms)}</p>
				<Heart className='d-inline-block float-right my-auto text-primary' size={20} />
			</div>
		</div>
	);
}

export default Song;
