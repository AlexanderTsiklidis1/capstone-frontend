import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';

import CalendlyWidget from './CalendlyWidget';

import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Gauge } from '@mui/x-charts/Gauge';

const UserDashboard = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
	}, [user, navigate]);

	return (
		<>
			<Typography
				color='primary.dark'
				sx={{
					textAlign: 'center',
					fontWeight: 700,
					fontSize: 35,
					pt: 5,
				}}
			>
				{user?.displayName}&#39;s Dashboard
			</Typography>

			<Grid
				container
				columnSpacing={4}
				rowSpacing={3}
				sx={{ my: 2, mx: 'auto' }}
			>
				<Grid xs={6} sx={{ mx: 1, maxWidth: '100%' }}>
					<Card
						sx={{
							minWidth: '70%',
							border: 1,
							borderColor: '#F3B6B6',
							borderStyle: 'solid',
						}}
					>
						<CardMedia
							sx={{
								ml: 4,
								mt: 4,
								width: 160,
								height: 160,
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
							<Typography color='primary' sx={{}}>
								RANK
							</Typography>
							<Gauge width={100} height={100} value={60} />
						</CardContent>
					</Card>
				</Grid>

				<Grid xs={5} sx={{ mx: 1 }}>
					<Card
						sx={{
							border: 1,
							minWidth: '35%',
							borderColor: '#F3B6B6',
							borderStyle: 'solid',
							overflow: 'auto',
							px: 2,
						}}
					>
						<CardContent
							sx={{ overflow: 'auto', width: '100%', textAlign: 'center' }}
						>
							<Typography color='primary'>INTERVIEW STATUS</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid xs={12} sx={{ mx: 1, mb: 2 }}>
					<Card
						sx={{
							maxWidth: '100%',
							maxHeight: '60%',
							border: 1,
							borderColor: '#F3B6B6',
							borderStyle: 'solid',
							overflow: 'auto',
						}}
					>
						<CardContent>
							<CalendlyWidget />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default UserDashboard;
