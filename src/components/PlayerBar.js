import React, { useState, useEffect } from 'react';
import './PlayerBar.scss';
import JasonDerulo from '../assets/img/jason_derulo.jpg';
import { Play, Volume2, ChevronLeft, ChevronRight, Pause } from 'react-feather';
import { useDataLayerValue } from '../DataLayer';

function PlayerBar({ spotify }) {
	const [{ current_playing_track }, dispatch] = useDataLayerValue();

	const [isPlaying, setPlaying] = useState();

	const updateCurrentPlayingTrack = () => {
		spotify.getMyCurrentPlayingTrack().then((response) => {
			dispatch({
				type: 'SET_MY_CURRENT_PLAYING_TRACK',
				current_playing_track: response,
			});
		});
	};

	// Get the initial value of isPlaying
	useEffect(() => {
		current_playing_track && setPlaying(current_playing_track.is_playing);
	}, [current_playing_track]);

	// Handle if the player has to pause or resume
	const handlePlayback = async () => {
		isPlaying ? pausePlayback() : resumePlayback();
	};

	// Pause Playback function
	const pausePlayback = () => {
		spotify.pause();
		setPlaying(false);
	};

	// Resume Playback function
	const resumePlayback = () => {
		spotify.play();
		setPlaying(true);
	};

	const skipToNextTrack = async () => {
		await spotify.skipToNext();
		updateCurrentPlayingTrack();
	};

	const skipToPreviuousTrack = async () => {
		await spotify.skipToPrevious();
		updateCurrentPlayingTrack();
	};

	return (
		<div className='playerBar d-none d-md-block'>
			<div className='row'>
				<div className='col-3 my-auto row'>
					<div className='col-md-4 col-lg-4 col-xl-3'>
						<img src={current_playing_track?.item?.album?.images[0]?.url} className='img-fluid playerBar__albumLogo' alt='album logo' />
					</div>
					<div className='col-md-8 col-lg-8 col-xl-9 align-items-start text-left'>
						<h5 className='m-0'>
							<marquee>{`${current_playing_track?.item?.name}`}</marquee>
						</h5>
						<small className='text-muted'>{current_playing_track?.item?.artists[0]?.name}</small>
					</div>
				</div>
				<div className='col-6 row my-auto mx-auto'>
					<div className='col-lg-5 col-md-7 my-auto text-center'>
						<ChevronLeft size={20} className='playerBar__icon' onClick={() => skipToPreviuousTrack()} />
						{isPlaying ? (
							<Pause size={38} className='playerBar__icon playerBar__playButton mb-2 mb-lg-0' onClick={() => handlePlayback()} />
						) : (
							<Play size={38} className='playerBar__icon playerBar__playButton mb-2 mb-lg-0' onClick={() => handlePlayback()} />
						)}{' '}
						<ChevronRight size={20} className='playerBar__icon' onClick={() => skipToNextTrack()} />
					</div>
					<div className='col-lg-7 col-md-5 mx-auto my-auto'>
						<span className='progress'>
							<span className='progress-bar' role='progressbar' style={{ width: '10%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
						</span>
					</div>
				</div>
				<div className='col-3 my-auto'>
					<Volume2 size={18} className='playerBar__icon' />
				</div>
			</div>
		</div>
	);
}

export default PlayerBar;
