/* eslint-disable react/prop-types */
import { FormLabel, FormControl, TextField, Button } from '@mui/material';

import PromptQuestions from './PromptQuestions';

const InterviewerGradingForm = ({ user }) => {
	return (
		<div>
			<FormControl>
				<FormLabel>Fellow Name</FormLabel>
				<TextField type='text' sx={{ mb: 1 }} />

				<FormLabel>Interviewer Name</FormLabel>
				<TextField type='text' sx={{ mb: 1 }} value={user?.displayName} />

				<PromptQuestions />

				<Button
					variant='contained'
					sx={{
						width: '30%',
						mx: 'auto',
						my: 3,
						color: 'primary',
					}}
				>
					Submit
				</Button>
			</FormControl>
		</div>
	);
};

export default InterviewerGradingForm;
