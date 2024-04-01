import { useState, useEffect } from 'react';
import PromptQuestion from './PromptQuestion';
import Carousel from 'react-material-ui-carousel';
import { Button, Stack } from '@mui/material';

const API = import.meta.env.VITE_BASE_URL;

const PromptQuestions = () => {
	const [prompts, setPrompts] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((nextIndex) =>
			nextIndex === prompts.length ? nextIndex : nextIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
	};

	useEffect(() => {
		fetch(`${API}/prompts`)
			.then((response) => response.json())
			.then((responseJSON) => {
				setPrompts(responseJSON);
				console.log(responseJSON);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(prompts);

	return (
		<>
			<Carousel autoPlay={false} index={currentIndex} indicators={false}>
				{prompts.map((question) => {
					return <PromptQuestion key={question.id} question={question} />;
				})}
			</Carousel>
			<Stack flexDirection='row' columnGap={3} my={1}>
				<Button onClick={handlePrev} variant='contained' sx={{ width: '50%' }}>
					Previous
				</Button>
				<Button onClick={handleNext} variant='contained' sx={{ width: '50%' }}>
					Next
				</Button>
			</Stack>
		</>
	);
};

export default PromptQuestions;
