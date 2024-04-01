/* eslint-disable react/prop-types */

import { FormLabel, FormControl, TextField, Button } from '@mui/material';

import PromptQuestions from './PromptQuestions';

const InterviewerGradingForm = ({ user }) => {
	return (
		<div>
			<FormControl>
				<FormLabel>Fellow Name</FormLabel>
				<TextField type='text' />
				<FormLabel>Interviewer Name</FormLabel>
				<TextField type='text' value={user?.displayName} />
				<br />
				<br />

				<PromptQuestions />

				<Button variant='contained'>Submit</Button>
			</FormControl>
		</div>
	);
};

export default InterviewerGradingForm;
