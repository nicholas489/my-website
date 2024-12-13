'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Home() {
  return (
    <Section>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Nicholas Caro Lopez
        </Typography>
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 2 }}>
          Explore my journey, projects, and experience.
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 2 }}>
          Always open to exploring new opportunites.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" size="large" color="primary">
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Section>
  );
}