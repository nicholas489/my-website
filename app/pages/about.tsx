'use client';
import * as React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function About() {
  return (
    <Section sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
            Hola, mucho gusto! My name is Nick. I am a 3rd year Computer Science Co-op Student at Toronto Metropolitan (formerly Ryerson) 
            University and I enjoy solving complex problems. I spend most of my time programming, the reasoning varying drastically anywhere
            from my university courses or professional work all the way to tinkering with the latest and most popular technologies out of
            personal interest. Having worked as a Software Developer/Engineer for 2+ years now, I have gained industry-level proficiency
            with programming languages like Python, C#, Javascript, SQL and many more. I also have some other hobbies including but not 
            limited to: MMA, Gaming and Working Out. Please look around the rest of this webpage and if you would like to reach out to me 
            in regards to anything, please message me!
        </Typography>
      </Container>
    </Section>
  );
}