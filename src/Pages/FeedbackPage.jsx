import { useContext } from 'react';
import InterviewerGradingForm from '../Components/InterviewerGradingForm';
import { Container, Typography, Box } from '@mui/material';
import { UserContext } from "../Providers/UserProvider";
import { useCurrentEvent } from "../Providers/CurrentEventProvider";

const FeedbackPage = () => {
	const user = useContext(UserContext);
	const { currentEvent } = useCurrentEvent();
	return (
		<Container minWidth={'100%'} sx={{ paddingTop: '48px' }} fixed>
			<Typography
				variant='h4'
				sx={{
					fontFamily: 'Verdana',
					fontWeight: '600',
					textAlign: 'center',
					color: 'primary.dark',
				}}
			>
				Mock Behavioral Interview Feedback
			</Typography>
			<Box sx={{ paddingTop: '48px' }}>
				<InterviewerGradingForm />
			</Box>
		</Container>
	);
};

export default FeedbackPage;
