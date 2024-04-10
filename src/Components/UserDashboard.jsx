import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { Card, CardMedia, CardContent, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Gauge } from "@mui/x-charts/Gauge";
const API = import.meta.env.VITE_BASE_URL;
import CalendlyWidget from "./CalendlyWidget";

//for a user(who is logged in via email) we want to display a list of events booked with their email on the user dashboard
//

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [events, setEvents] = useState([]);
console.log(user.email)
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    fetch(`${API}/interviews`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		  },
		body: JSON.stringify({email: user.email})
})
      .then((response) => response.json())
      .then((responseJson) => {
        setEvents(responseJson);
        console.log(responseJson);
      });
  }, [user, navigate]);

  return (
    <>
      <Typography
        color="primary.dark"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 35,
          pt: 5,
        }}
      >
        {user?.displayName}&#39;s Dashboard
      </Typography>

      <Grid
        container
        columnSpacing={4}
        rowSpacing={3}
        sx={{ my: 2, mx: "auto" }}
      >
        <Grid xs={6} sx={{ mx: 1, maxWidth: "100%" }}>
          <Card
            sx={{
              minWidth: "70%",
              border: 1,
              borderColor: "#F3B6B6",
              borderStyle: "solid",
            }}
          >
            <CardMedia
              sx={{
                ml: 4,
                mt: 4,
                width: 160,
                height: 160,
                borderRadius: "50%",
              }}
              image={user?.photoURL}
              title="User Profile Picture"
            />

            <CardContent>
              <Typography sx={{ fontSize: 20 }}>
                Name: {user?.displayName}
              </Typography>
              <Typography>Email: {user?.email}</Typography>
              <Typography color="primary" sx={{}}>
                RANK
              </Typography>
              <Gauge width={100} height={100} value={60} />
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={5} sx={{ mx: 1 }}>
          <Card
            sx={{
              border: 1,
              minWidth: "35%",
              borderColor: "#F3B6B6",
              borderStyle: "solid",
              overflow: "auto",
              px: 2,
            }}
          >
            <CardContent
              sx={{ overflow: "auto", width: "100%", textAlign: "center" }}
            >
              <Typography color="primary">INTERVIEW STATUS</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sx={{ mx: 1, mb: 2 }}>
          <Card
            sx={{
              maxWidth: "100%",
              maxHeight: "60%",
              border: 1,
              borderColor: "#F3B6B6",
              borderStyle: "solid",
              overflow: "auto",
            }}
          >
            <CardContent>
              <CalendlyWidget />
            </CardContent>
            
          </Card>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ mx: 1, mb: 2 }}>
        <Card
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            border: 1,
            borderColor: "#F3B6B6",
            borderStyle: "solid",
            overflow: "auto",
            p: 3,
          }}
        >
          <Typography variant="h5" color="primary" gutterBottom>
            Upcoming Events
          </Typography>
          <List>
            {events.map((event) => (
              <ListItem
                key={event.id}
                button
                component={Link}
                to={`/events/${event.id}`}
                sx={{ mb: 1, border: 1, borderColor: "#cccccc", borderRadius: "5px" }}
              >
                <ListItemText
                  primary={`Meeting with ${event.invitee_name}`}
                  secondary={`Starts at: ${new Date(event.start_time).toLocaleString()}`}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </>
  );
};

export default UserDashboard;