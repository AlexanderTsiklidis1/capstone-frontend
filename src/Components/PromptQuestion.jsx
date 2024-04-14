/* eslint-disable react/prop-types */
import { useState } from 'react';

import {
	Box,
	Card,
	CardContent,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';

const PromptQuestion = ({ question }) => {
	const { prompt, id } = question;
	const [grade, setGrade] = useState('');
	const [comment, setComment] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;

		switch (name) {
			case 'grade':
				setGrade(value);
				break;
			case 'comment':
				setComment(value);
				break;
			default:
				break;
		}
	};

	const selectColor =
		grade === 6.25
			? 'green'
			: grade === 4.6875
			? 'gold'
			: grade === 3.125
			? 'darkorange'
			: 'red';

	return (
		<Card
			sx={{
				mb: 0,
				p: 1,
				border: 1,
				borderColor: '#F3B6B6',
				borderStyle: 'solid',
			}}
		>
			<CardContent>
				<Typography
					color='primary'
					sx={{
						fontWeight: 700,
					}}
				>
					Question {id}:
				</Typography>{' '}
				{prompt}
				<Box
					sx={{
						minWidth: 150,
						mt: 2,
					}}
				>
					<FormControl fullWidth>
						<InputLabel id='grade-select-label'>Grade</InputLabel>
						<Select
							labelId='grade-select-label'
							id='grade-select'
							value={grade}
							label='Grade'
							name='grade'
							onChange={handleChange}
							sx={{ color: selectColor, fontWeight: 600, mb: 3 }}
						>
							<MenuItem value={6.25} sx={{ color: 'green', fontWeight: 600 }}>
								Exceptional
							</MenuItem>
							<MenuItem value={4.6875} sx={{ color: 'gold', fontWeight: 600 }}>
								Proficient
							</MenuItem>
							<MenuItem
								value={3.125}
								sx={{ color: 'darkorange', fontWeight: 600 }}
							>
								Developing
							</MenuItem>
							<MenuItem value={1.5625} sx={{ color: 'red', fontWeight: 600 }}>
								Novice
							</MenuItem>
						</Select>
						<TextField
							id='interviewer-comment'
							label='Comment'
							name='comment'
							value={comment}
							multiline
							placeholder='Comment'
							onChange={handleChange}
							sx={{ mb: 1 }}
						/>
					</FormControl>
				</Box>
			</CardContent>
		</Card>
	);
};

export default PromptQuestion;
