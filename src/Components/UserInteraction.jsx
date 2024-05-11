import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const interviewQuestions = [
  "What is your greatest strength?",
  "What is your greatest weakness?",
  "Where do you see yourself in five years?",
  "Why should we hire you?",
  "Tell me about a challenge or conflict you've faced at work, and how you dealt with it.",
];

const InteractiveSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleQuestionChange = (event) => {
    setSelectedQuestion(event.target.value);
  };

  // const handleAnswerChange = (event) => {
  //   setAnswer(event.target.value);
  // };

  // const handleSubmit = () => {
  //   setOpenSnackbar(true);
  //   //attempting to handle answer storage here
  //   // You might want to handle the answer storage or further processing here
  // };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Card variant="outlined" sx={{ mt: 3, borderColor: "primary.main" }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
        >
          Your Turn: Practice Answering
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="interview-question-label">
            Choose a Question
          </InputLabel>
          <Select
            labelId="interview-question-label"
            id="interview-question-select"
            value={selectedQuestion}
            label="Choose a Question"
            onChange={handleQuestionChange}
          >
            {interviewQuestions.map((question, index) => (
              <MenuItem key={index} value={question}>
                {question}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Your Answer"
          multiline
          rows={4}
          value={answer}
          onChange={handleAnswerChange}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Answer
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Answer submitted!"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </CardContent>
    </Card>
  );
};

export default InteractiveSection;
