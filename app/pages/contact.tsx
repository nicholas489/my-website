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

export default function Contact() {
    return (
        <Section>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
              I’d love to hear from you! Feel free to reach out anytime.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" size="large" color="primary">
                Send a Message
              </Button>
            </Box>
          </Container>
        </Section>
    );
}