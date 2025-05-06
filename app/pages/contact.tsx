'use client';
import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid2, Link, styled, Typography } from '@mui/material';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.default,
}));

const HoverImage = styled(Image)(() => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function Contact() {
    return (
        <Section id='contact'>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
              I’d love to hear from you! Feel free to reach out anytime through any of the following socials.
            </Typography>
            <Grid2 container direction={'row'} spacing={8} sx={{justifyContent: 'space-evenly'}}>
                <Grid2 container size={4} justifyContent="center" alignItems="center">
                  <Link href="mailto:nickcarolopez@gmail.com" target="_blank" rel="noopener">
                    <HoverImage 
                      src="/svg/email.svg"
                      width={100}
                      height={100}
                      alt="Email Logo"
                    />
                  </Link>
                </Grid2>
                <Grid2 container size={{ xs: 12, sm: 4 }} justifyContent="center" alignItems="center">
                  <Link href="https://www.linkedin.com/in/nicholas-caro-lopez/" target="_blank" rel="noopener">
                    <HoverImage 
                      src="/svg/linkedin.svg"
                      width={100}
                      height={100}
                      alt="LinkedIn Logo"
                    />
                  </Link>
                </Grid2>
                <Grid2 container size={{ xs: 12, sm: 4 }} justifyContent="center" alignItems="center">
                  <Link href="https://github.com/nicholas489" target="_blank" rel="noopener">
                    <HoverImage 
                      src="/svg/github.svg"
                      width={100}
                      height={100}
                      alt="GitHub Logo"
                    />
                  </Link>
                </Grid2>
            </Grid2>
          </Container>
        </Section>
    );
}