import React from 'react';
import { loginUrl } from '../utils/spotify';

function Login() {
	return (
		<div className='container'>
			<a href={loginUrl} className='link'>
				Clica aqui para logear
			</a>
		</div>
	);
}

export default Login;
