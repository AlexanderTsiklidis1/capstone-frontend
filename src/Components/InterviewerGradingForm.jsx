/* eslint-disable react/prop-types */

import { useState, useEffect, useCallback, useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import {
	FormLabel,
	FormControl,
	TextField,
	Button,
	Stack,
} from '@mui/material';

import PromptQuestion from './PromptQuestion';

const API = import.meta.env.VITE_BASE_URL;

const PromptQuestions = ({ prompts, feedback, setFeedback }) => {
	const [normalizedPrompts, setNormalizedPrompts] = useState({});

	useEffect(() => {
		const normalizedPromptObject = {};

		prompts.forEach((prompt) => {
			normalizedPromptObject[prompt.id] = prompt;
		});
		setNormalizedPrompts(normalizedPromptObject);
	}, [normalizedPrompts, prompts]);

	const updateQuestionFeedback = (questionNumber, feedbackType, value) => {
		setFeedback({
			...feedback,
			[`prompt_${questionNumber}_${feedbackType}`]: value,
		});
	};

	return (
		<>
			<Stack flexDirection='column' spacing={3} sx={{ mt: 3 }}>
				{Object.keys(normalizedPrompts).length && (
					<>
						<PromptQuestion
							key={feedback?.prompt_1_id}
							question={normalizedPrompts[feedback?.prompt_1_id]}
							questionNumber={1}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_2_id}
							question={normalizedPrompts[feedback?.prompt_2_id]}
							questionNumber={2}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_3_id}
							question={normalizedPrompts[feedback?.prompt_3_id]}
							questionNumber={3}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_4_id}
							question={normalizedPrompts[feedback?.prompt_4_id]}
							questionNumber={4}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_5_id}
							question={normalizedPrompts[feedback?.prompt_5_id]}
							questionNumber={5}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_6_id}
							question={normalizedPrompts[feedback?.prompt_6_id]}
							questionNumber={6}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_7_id}
							question={normalizedPrompts[feedback?.prompt_7_id]}
							questionNumber={7}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
						<PromptQuestion
							key={feedback?.prompt_8_id}
							question={normalizedPrompts[feedback?.prompt_8_id]}
							questionNumber={8}
							updateQuestionFeedback={updateQuestionFeedback}
						/>
					</>
				)}
			</Stack>
		</>
	);
};

const InterviewerGradingForm = () => {
	const user = useContext(UserContext);
	const currentEvent = JSON.parse(localStorage.getItem('currentEvent'));

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
		},
		[feedback]
	);

	useEffect(() => {
		fetch(`${API}/prompts`)
			.then((response) => response.json())
			.then((responseJSON) => {
				setPrompts(responseJSON);
				randomQuestions(responseJSON);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const postData = {
			interviewee_name: fellowName,
			admin_name: user.displayName,
			...feedback,
		};
	
		fetch(`${API}/feedback`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		})
		.then((response) => response.json())
		.then((data) => {
			console.log('Success:', data);
			alert('Feedback submitted successfully!');
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Failed to submit feedback. Please try again.');
		});
	};
	

	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<FormLabel>Interviewee Name</FormLabel>
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

				<PromptQuestions
					prompts={prompts}
					setFeedback={setFeedback}
					feedback={feedback}
				/>

				<Button
					variant='contained'
					sx={{
						width: '30%',
						mx: 'auto',
						my: 3,
						color: 'primary',
					}}
					type='submit'
				>
					Submit
				</Button>
			</FormControl>
		</form>
	);
};

export default InterviewerGradingForm;
