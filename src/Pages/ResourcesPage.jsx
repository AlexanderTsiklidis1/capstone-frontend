import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Link,
  Grid,
} from '@mui/material';

const ResourcesPage = () => {
  return (
    <>
      <Typography
        color="primary.dark"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 35,
          pt: 5,
          pb: 2,
        }}
      >
        Interview Preparation Resources
      </Typography>

      <Grid container spacing={2} sx={{ px: 3 }}>
        {/* Tips for Interviews */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24, mb: 2 }}>Interview Tips</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Research the company and understand its mission." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Practice your answers to common questions." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Prepare questions to ask the interviewer." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Common Questions */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24, mb: 2 }}>Common Questions</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Tell me about yourself." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="What are your greatest strengths and weaknesses?" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Describe a challenge you've faced at work and how you overcame it." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Preparation Materials */}
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24, mb: 2 }}>Preparation Materials</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="‘Cracking the Coding Interview’ by Gayle Laakmann McDowell - a great resource for technical interviews." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Online platforms like LeetCode and HackerRank for practice problems." />
                </ListItem>
               
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Motivational Section */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 24, mb: 2 }}>Stay Motivated!</Typography>
              <Typography>
                Remember, every interview is a step forward in your career journey. Keep learning,
                stay positive, and believe in yourself!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ResourcesPage;
