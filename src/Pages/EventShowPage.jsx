import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
const API = import.meta.env.VITE_BASE_URL;

const EventShowPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Assuming you have a way to fetch a single event by its ID
    fetch(`${API}/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.invitee_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Meeting ID: {event.meeting_id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Password: {event.password}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Inviter: {event.inviter_name} ({event.inviter_email})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Invitee: {event.invitee_name} ({event.invitee_email})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start Time: {new Date(event.start_time).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventShowPage;
