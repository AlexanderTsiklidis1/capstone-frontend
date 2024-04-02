import InterviewerGradingForm from '../Components/InterviewerGradingForm';
import { Container, Typography, Box } from '@mui/material';

const FeedbackPage = () => {
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
