/* eslint-disable react/prop-types */
import { FormLabel, FormControl, TextField, Button } from '@mui/material';
import { useState, useEffect, useCallback, useContext } from 'react';
import { UserContext } from "../Providers/UserProvider";
import { useCurrentEvent } from "../Providers/CurrentEventProvider";

import PromptQuestions from './PromptQuestions';

const API = import.meta.env.VITE_BASE_URL;

const InterviewerGradingForm = () => {
	const user = useContext(UserContext);
	const { currentEvent } = useCurrentEvent();
	console.log(currentEvent)
	const [prompts, setPrompts] = useState([]);
	const [fellowName, setFellowName] = useState('');

	const [feedback, setFeedback] = useState({
		prompt_1_id: null,
		prompt_1_grade: null,
		prompt_1_notes: '',
		prompt_2_id: null,
		prompt_2_grade: null,
		prompt_2_notes: '',
		prompt_3_id: null,
		prompt_3_grade: null,
		prompt_3_notes: '',
		prompt_4_id: null,
		prompt_4_grade: null,
		prompt_4_notes: '',
		prompt_5_id: null,
		prompt_5_grade: null,
		prompt_5_notes: '',
		prompt_6_id: null,
		prompt_6_grade: null,
		prompt_6_notes: '',
		prompt_7_id: null,
		prompt_7_grade: null,
		prompt_7_notes: '',
		prompt_8_id: null,
		prompt_8_grade: null,
		prompt_8_notes: '',
	});

	useEffect(() => {
		if (currentEvent && currentEvent.invitee_name) {
			setFellowName(currentEvent.invitee_name);
		}
	}, [currentEvent]);
	
	
	const randomQuestions = useCallback(
		(data) => {
			const questionCategories = {
				1: 'Pop Pitch',
				2: 'Research',
				3: 'Projects',
				4: 'Teamwork',
				5: 'Growth',
				6: 'Problem Solving',
				7: 'Leadership',
				8: 'Curiosity',
			};

			const populateRandomQuestion = (category, promptsArray) => {
				const categoryPrompts = promptsArray.filter(
					(prompt) => prompt.category === category
				);

				const randomId = Math.floor(Math.random() * categoryPrompts.length);
				return categoryPrompts[randomId]?.id;
			};

			const setQuestionId = () => {
				const questionNumbers = Object.keys(questionCategories);
				const updatedPromptKeys = {};
				questionNumbers.forEach((questionNumber) => {
					const promptKey = `prompt_${questionNumber}_id`;

					updatedPromptKeys[promptKey] = populateRandomQuestion(
						questionCategories[questionNumber],
						data
					);
				});

				setFeedback({
					...feedback,
					...updatedPromptKeys,
				});
			};
			setQuestionId();
			console.log(feedback);
		},
		[feedback]
	);

	useEffect(() => {
		fetch(`${API}/prompts`)
			.then((response) => response.json())
			.then((responseJSON) => {
				setPrompts(responseJSON);
				console.log(responseJSON);
				randomQuestions(responseJSON);
			})

			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<FormControl>
			<FormLabel>Fellow Name</FormLabel>
    <TextField 
        type='text' 
        sx={{ mb: 1 }} 
        value={fellowName}
		onChange={(e) => setFellowName(e.target.value)}
    />

    <FormLabel>Interviewer Name</FormLabel>
    <TextField 
        type='text' 
        sx={{ mb: 1 }} 
        value={user ? user.displayName : 'Loading...'}
    />

				<PromptQuestions prompts={prompts} />

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
