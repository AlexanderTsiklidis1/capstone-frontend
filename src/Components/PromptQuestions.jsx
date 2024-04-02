import { useState, useEffect } from 'react';
import PromptQuestion from './PromptQuestion';
import { Stack } from '@mui/material';

const API = import.meta.env.VITE_BASE_URL;

const PromptQuestions = () => {
	const [prompts, setPrompts] = useState([]);

	useEffect(() => {
		fetch(`${API}/prompts`)
			.then((response) => response.json())
			.then((responseJSON) => {
				setPrompts(responseJSON);
				console.log(responseJSON);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<Stack flexDirection='column' spacing={3} sx={{ mt: 3 }}>
				{prompts.map((question) => {
					return <PromptQuestion key={question.id} question={question} />;
				})}
			</Stack>
		</>
	);
};

export default PromptQuestions;
