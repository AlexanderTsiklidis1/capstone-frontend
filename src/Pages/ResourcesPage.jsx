import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Chip,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const styles = {
  card: {
    mb: 2,
    borderColor: 'primary.main',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 2,
    },
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    padding: '10px 0',
  },
  accordion: {
    backgroundColor: '#f0f0f0',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    backgroundColor: '#e0e0e0',
  },
  chip: {
    mr: 1,
  },
};

const ResourcesPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={styles.header}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Verdana',
            fontWeight: '600',
            textAlign: 'center',
            color: 'primary.dark',
          }}
        >
          Tools for Your Next Interview
        </Typography>
      </Paper>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Grid item xs={12}>
  <Card variant="outlined" sx={styles.card}>
    <CardContent sx={styles.cardContent}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'medium',  textAlign: 'center', }}>
        The Purpose of the Interview
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="To gauge your problem-solving and critical thinking abilities." 
            secondary="Interviewers ask scenario-based questions to understand how you approach complex situations. They're looking for a glimpse into your thought process, assessing your ability to analyze problems, consider various solutions, and apply logical reasoning to navigate challenges."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="secondary" />
          </ListItemIcon>
          <ListItemText 
            primary="To understand your motivation, passion, and whether you're a cultural fit." 
            secondary="Questions about your interests, why you chose your profession, or why you want to work at the company are aimed at uncovering your intrinsic motivations. Employers are looking for individuals who are not only qualified but also genuinely interested in their role and aligned with the company's values and culture."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="To assess your technical skills, experience, and adaptability to new challenges." 
            secondary="Technical questions or those asking about your past experiences serve to validate the skills listed on your resume. Moreover, they provide insights into your ability to learn and adapt to new technologies or methodologies, an essential trait in the ever-evolving tech landscape."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="secondary" />
          </ListItemIcon>
          <ListItemText 
            primary="To evaluate your communication and teamwork abilities." 
            secondary="Questions about teamwork, conflict resolution, and communication skills are critical, as they reflect how well you will integrate into the team. Interviewers are interested in your ability to articulate thoughts clearly, listen actively, and collaborate effectively with others towards common goals."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="To determine your resilience and stress management strategies." 
            secondary="Inquiries about challenges, failures, or stressful situations test your resilience and ability to handle pressure. Interviewers value candidates who can demonstrate growth from past experiences, showcasing adaptability, perseverance, and the capacity to maintain composure under stress."
          />
        </ListItem>
      </List>
    </CardContent>
  </Card>
</Grid>

        <Grid item xs={12}>
          <Card variant="outlined" sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'medium' }}>
                Deep Dive: Question Analysis & Responses
              </Typography>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>Tell me about a time you led a team under a tight deadline.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Motivation" color="primary" sx={styles.chip} /> This question aims to assess leadership skills, time management, and stress management.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Strategy" color="secondary" sx={styles.chip} /> Focus on a specific example, discuss the challenges faced, your actions, leadership style, and the successful outcome.
                  </Typography>
                  <Chip label="Example Response" color="primary" sx={styles.chip} />
                    "In my previous role, we were tasked with delivering a client project within a significantly shortened timeframe. I led the team by breaking down the project into manageable tasks, setting clear milestones, and holding daily check-ins to monitor progress and address any issues promptly. Despite the pressure, we successfully met the deadline, and the client commended our efficiency and quality of work. This experience taught me the value of clear communication and proactive problem-solving under pressure."
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>Describe a situation where you had to solve a difficult problem.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Motivation" color="primary" sx={styles.chip} /> Interviewers are interested in your problem-solving process and creativity.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Strategy" color="secondary" sx={styles.chip} /> Highlight a specific problem, your thought process, the solution you devised, and the result. Emphasize your analytical and critical thinking skills.
                  </Typography>
                  <Chip label="Example Response" color="primary" sx={styles.chip} />
                   "When faced with a critical software bug before product launch, I systematically isolated the issue, researched potential solutions, and collaborated with the team to implement a fix. This methodical approach not only resolved the issue quickly but also improved our product's reliability."
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>Give an example of a goal you reached and tell me how you achieved it.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Motivation" color="primary" sx={styles.chip} /> This question probes your goal-setting, planning, and execution abilities.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Strategy" color="secondary" sx={styles.chip} /> Discuss a meaningful goal, how you planned for it, the steps you took, any obstacles you overcame, and the outcome. Reflect on what this achievement demonstrates about your work ethic and determination.
                  </Typography>
                  <Chip label="Example Response" color="primary" sx={styles.chip} />
                    "I set a goal to increase our department's efficiency by 20%. By analyzing our processes, implementing new software tools, and providing training, we surpassed our goal, reaching a 25% efficiency improvement within six months."
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>How do you handle criticism?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Motivation" color="primary" sx={styles.chip} /> To understand your resilience, adaptability, and whether you can learn and grow from feedback.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Strategy" color="secondary" sx={styles.chip} /> Provide examples that demonstrate your ability to receive feedback constructively, including what you learned from the experience and how it led to improvement or change in your behavior or work.
                  </Typography>
                  <Chip label="Example Response" color="primary" sx={styles.chip} />
                     "I view criticism as a valuable opportunity to grow. For instance, after receiving feedback on my presentation skills, I took a public speaking course. This significantly boosted my confidence and effectiveness in client meetings."
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>Tell me about a time when you worked on a team with a difficult colleague.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Motivation" color="primary" sx={styles.chip} /> This question evaluates your interpersonal skills, patience, and ability to navigate challenging team dynamics.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <Chip label="Strategy" color="secondary" sx={styles.chip} /> Share a story that highlights how you approached the situation with empathy, understanding, and professionalism. Focus on the actions you took to ensure team cohesion and project success without casting blame or negativity on others.
                  </Typography>
                  <Chip label="Example Response" color="primary" sx={styles.chip} />
                    "On a project team, I worked with a colleague who had a very different approach to work. Initially, our differences led to tension, but I sought to understand their perspective and find common ground. By focusing on our shared goals and adapting our communication styles, we improved our collaboration and delivered a successful project outcome. This experience taught me the importance of empathy and adaptability in teamwork."
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
