import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';
import { Button, Typography, Grid, Container, Card, CardMedia, CardContent, Box } from '@mui/material';
import { signInWithGoogle, logOut } from '../Services/Firebase';

const LandingPage = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/userDashboard');
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom color="primary">
            Ace Your Interviews
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Elevate your interviewing skills to new heights with AceIt. Engage in mock interviews with industry professionals and become a master of behavioral interviews.
          </Typography>
          <Button variant="contained" color="primary" onClick={signInWithGoogle} sx={{ mr: 2 }}>
            Get Started
          </Button>
          <Button variant="outlined" color="secondary" onClick={logOut}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Group studying"
              height="100%"
              image="src/assets/interview_pic_landing_page.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Join Our Community
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Earn badges, climb ranks, and showcase your interviewing prowess within our supportive community. Stay tuned for exciting updates, including AI technology integration!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="textSecondary">
          Ready to take the next step in your career? Join AceIt today and transform your interview skills.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
