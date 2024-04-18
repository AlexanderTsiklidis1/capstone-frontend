import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const API = import.meta.env.VITE_BASE_URL;

const FeedbackDetails = () => {
  const { id } = useParams();
  const [feedbackDetails, setFeedbackDetails] = useState(null);
  const [prompts, setPrompts] = useState([]);

  const fetchFeedbackDetails = async () => {
    try {
      const response = await fetch(`${API}/feedback/details/${id}`);
      const data = await response.json();
      setFeedbackDetails(data);
      fetchPrompts(data);
    } catch (error) {
      console.error('Failed to fetch feedback details:', error);
    }
  };

  const fetchPrompts = async (feedbackData) => {
    const promptIds = Array.from({ length: 8 }).map((_, index) => feedbackData[`prompt_${index + 1}_id`]).filter(id => id != null);
    const response = await fetch(`${API}/prompts?ids=${promptIds.join(',')}`);
    const data = await response.json();
    setPrompts(data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.prompt }), {}));
  };

  useEffect(() => {
    fetchFeedbackDetails();
  }, [id]);

  if (!feedbackDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', mt: 5, p: 3 }}>
      <CardContent>
        <Typography variant="h4" color="primary" gutterBottom>
          Feedback Details for {feedbackDetails.interviewee_name}
        </Typography>
        <Typography sx={{ fontSize: 20, mt: 1 }}>
          <strong>Administrator:</strong> {feedbackDetails.admin_name}
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          <strong>Total Grade:</strong> {feedbackDetails.total_grade}
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 3, mb: 2 }}>
          Detailed Feedback
        </Typography>
        <List>
          {Array.from({ length: 8 }).map((_, index) => {
            const promptId = feedbackDetails[`prompt_${index + 1}_id`];
            const grade = feedbackDetails[`prompt_${index + 1}_grade`];
            const notes = feedbackDetails[`prompt_${index + 1}_notes`];
            const promptText = prompts[promptId];
            return promptId ? (
              <ListItem key={promptId} sx={{ mb: 2 }}>
                <ListItemText
                  primary={`Prompt: ${promptText}`}
                  secondary={`Grade: ${grade}, Notes: ${notes || 'No notes'}`}
                />
              </ListItem>
            ) : null;
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default FeedbackDetails;
