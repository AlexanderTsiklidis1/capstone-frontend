import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';
import ProfileImg from '../assets/michael.jpeg';

import './UserDashboard.css'; // Make sure to create a corresponding CSS file for styling

const UserDashboard = ({ currentUser }) => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	console.log(user);

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
	}, [user, navigate]);

	return (
		<div className='user-dashboard'>
			<div className='user-dashboard-profile'>
				<img
					className='user-dashboard-profile-image'
					src={ProfileImg}
					alt='Michael Kleemoff'
				/>
			</div>
			<div className='user-dasboard-stats'>
				<section className='dashboard-header'>
					<h1>User Dashboard</h1>
				</section>
				<section className='dashboard-content'>
					<p>User content will go here.</p>
				</section>
			</div>
			<div className='user-dashboard-book-interview'>
				<button>Book Interview</button>
			</div>
		</div>
	);
};

export default UserDashboard;
