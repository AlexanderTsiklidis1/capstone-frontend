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
	Typography,
} from '@mui/material';

const PromptQuestion = ({ question }) => {
	const { prompt, id } = question;
	console.log(prompt);
	const [grade, setGrade] = useState('');

	const handleChange = (event) => {
		setGrade(event.target.value);
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
					color='secondary.dark'
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
							onChange={handleChange}
							sx={{ color: selectColor, fontWeight: 600 }}
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
					</FormControl>
				</Box>
			</CardContent>
		</Card>
	);
};

export default PromptQuestion;
