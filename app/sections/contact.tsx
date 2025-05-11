'use client';
import * as React from 'react';
import { Box, Container, Grid2, styled, Typography } from '@mui/material';
import ContactCard from '@/components/ContactCard';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Contact() {
    return (
        <Section id='contact'>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
              I’d love to hear from you! Feel free to reach out anytime through any of the following socials.
            </Typography>
            <Grid2 container direction={'row'} sx={{justifyContent: 'center'}}>
              <ContactCard 
                href='mailto:nickcarolopez@gmail.com'
                src="/svg/email.svg"
                alt="Email Logo"
              />
              <ContactCard 
                href='https://www.linkedin.com/in/nicholas-caro-lopez/'
                src="/svg/linkedin.svg"
                alt="LinkedIn Logo"
              />
              <ContactCard 
                href='https://github.com/nicholas489'
                src="/svg/github.svg"
                alt="Github Logo"
              />
            </Grid2>
          </Container>
        </Section>
    );
}