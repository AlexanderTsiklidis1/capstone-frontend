import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../Providers/UserProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { signInWithGoogle, logOut } from "../Services/Firebase";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/userDashboard");
    }
  }, [user, navigate]);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ my: 8, textAlign: matchesSM ? "center" : "left" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold", // Makes the font bolder
            fontSize: "2.5rem", // Adjusts the size of the font
            color: "primary.main", // Use theme's primary color
            textShadow: "1px 1px 2px gray", // Subtle text shadow for depth
            letterSpacing: "0.1rem", // Spacing between letters
            display: "flex",
            justifyContent: "center",
          }}
        >
          Ace Behavioral Interviews with AceIt
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Prepare, practice, and shine in your interviews with live feedback
          from industry experts.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={signInWithGoogle}
            className="button login-signup-button"
            variant="contained"
            color="primary"
            size="large"
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* // Features Overview */}
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              width: 300,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 3,
            }}
          >
            <VideoCallIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{
                my: 2,
                color: "secondary.dark",
                fontFamily: "Reddit Mono",
                fontWeight: 900,
                fontSize: "1.25rem",
              }}
            >
              Live Webcam Interviews
            </Typography>
            <Typography>
              Conduct real-time interviews with experts via webcam.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              width: 300,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 3,
            }}
          >
            <CalendarTodayIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{
                my: 2,
                color: "secondary.dark",
                fontFamily: "Reddit Mono",
                fontWeight: 900,
                fontSize: "1.25rem",
              }}
            >
              Easy Scheduling
            </Typography>
            <Typography>
              Book interviews effortlessly with our integrated scheduling
              system.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              width: 300,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 3,
            }}
          >
            <EmojiEventsIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{
                my: 2,
                color: "secondary.dark",
                fontFamily: "Reddit Mono",
                fontWeight: 900,
                fontSize: "1.25rem",
              }}
            >
              Unique Ranking System
            </Typography>
            <Typography>
              Progress through ranks from Rookie to Master as you improve your
              interview skills.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", // Makes the font bolder
            fontSize: "2.5rem", // Adjusts the size of the font
            color: "primary.main", // Use theme's primary color
            textShadow: "1px 1px 2px gray", // Subtle text shadow for depth
            letterSpacing: "0.1rem", // Spacing between letters
            display: "flex",
            justifyContent: "center", }}>
          Ready to Take Your Interview Skills to the Next Level?
        </Typography>
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          color="secondary"
          size="large"
        >
          Start Practicing Today
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
