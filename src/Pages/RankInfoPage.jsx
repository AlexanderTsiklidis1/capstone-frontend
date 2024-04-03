import React from 'react';
import { Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Container, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const rankingStyles = {
  pageContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    padding: '10px 0',
  },
  listItem: {
    padding: '10px 20px',
  },
  listItemIcon: {
    minWidth: '50px',
  },
  icon: {
    color: '#ffd700', // gold color for icons
  },
  divider: {
    margin: '12px 0',
  },
};

const RankInfoPage = () => {
  return (
    <Container sx={rankingStyles.pageContainer}>
      <Paper sx={rankingStyles.header}>
        <Typography variant="h4" align="center">
          Journey Through the Ranks
        </Typography>
      </Paper>
      <Typography variant="h6" align="center" gutterBottom>
        Every challenge is a step towards mastery. Where will your journey take you?
      </Typography>
      <List>
        <ListItem sx={rankingStyles.listItem}>
          <ListItemIcon sx={rankingStyles.listItemIcon}>
            <StarBorderIcon sx={rankingStyles.icon} />
          </ListItemIcon>
          <ListItemText primary="Rookie - Embark on your quest with the spirit of a learner, eager for the challenges ahead." />
        </ListItem>
        <Divider variant="inset" component="li" sx={rankingStyles.divider} />
        <ListItem sx={rankingStyles.listItem}>
          <ListItemIcon sx={rankingStyles.listItemIcon}>
            <EmojiEventsIcon sx={rankingStyles.icon} />
          </ListItemIcon>
          <ListItemText primary="Copper - Congratulations! You've completed your first interview. The journey has truly begun." />
        </ListItem>
        <Divider variant="inset" component="li" sx={rankingStyles.divider} />
        {/* Repeat the pattern for Bronze, Silver, Gold, Platinum, Diamond, and Master ranks */}
        <ListItem sx={rankingStyles.listItem}>
          <ListItemIcon sx={rankingStyles.listItemIcon}>
            <EmojiEventsIcon sx={rankingStyles.icon} />
          </ListItemIcon>
          <ListItemText primary="Bronze - Your first victory! A testament to your growing skills." />
        </ListItem>
        {/* Include additional ranks as needed */}
      </List>
      <Typography variant="body1" align="center" gutterBottom sx={{ marginTop: '20px' }}>
        Progress through the ranks by honing your skills and overcoming the challenges of each interview. Your dedication will be rewarded with recognition and the satisfaction of personal growth. Aim for the stars - the Master rank awaits the most tenacious and skilled.
      </Typography>
    </Container>
  );
};

export default RankInfoPage;
