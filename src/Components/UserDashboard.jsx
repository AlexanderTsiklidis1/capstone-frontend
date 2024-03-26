import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';

import {
	Button,
	Card,
	CardMedia,
	CardContent,
	Container,
	Typography,
	Box,
	Stack,
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

// import './UserDashboard.css'; // Make sure to create a corresponding CSS file for styling

const UserDashboard = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	// console.log(user.photoURL);

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
	}, [user, navigate]);

	// const { photoURL, email, displayName } = user;

	return (
		// <div className='user-dashboard'>
		// 	<header className='dashboard-header'>
		// 		<h1>User Dashboard</h1>
		// 	</header>
		// 	<section className='dashboard-content'>
		// 		<p>User content will go here.</p>
		// 	</section>
		// </div>
		<Stack>
			<Typography
				sx={{
					textAlign: 'center',
					color: '#5372FF',
					fontWeight: 700,
					fontSize: 20,
				}}
			>
				{user?.displayName}&#39;s Dashboard
			</Typography>

			<Stack flexDirection='column' rowSpacing={1} columnSpacing={2}>
				<Card
					sx={{
						ml: 5,
						mt: 5,
						// maxWidth: 'xs',
						width: '100%',
						border: 1,
						borderColor: '#F3B6B6',
						borderStyle: 'solid',
					}}
				>
					<CardMedia
						sx={{
							ml: 4,
							mt: 4,
							width: 85,
							height: 85,
							borderRadius: '50%',
						}}
						image={user?.photoURL}
						title='User Profile Picture'
					/>

					<CardContent>
						<Typography sx={{ fontSize: 20 }}>
							Name: {user?.displayName}
						</Typography>
						<Typography>Email: {user?.email}</Typography>
					</CardContent>
				</Card>
			</Stack>

			<Stack flexDirection='row' rowSpacing={1} columnSpacing={1}>
				<Card
					sx={{
						m: 5,
						border: 1,
						borderColor: '#F3B6B6',
						borderStyle: 'solid',
					}}
				>
					<CardContent>
						<Typography>RANK</Typography>
					</CardContent>
				</Card>

				<Card
					sx={{
						m: 15,
						border: 1,
						borderColor: '#F3B6B6',
						borderStyle: 'solid',
					}}
				>
					<CardContent>
						<Typography>CALENDAR</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Stack>
	);
};

export default UserDashboard;
