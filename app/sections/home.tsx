'use client';
import * as React from 'react';
import { Box, Button, Link, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import me from '../../public/me.jpg';

const ProfileImage = styled(Image)(({ theme }) => ({
  width: '200px',
  maxwidth: '300px',
  height: 'auto',
  padding: theme.spacing(2),
  margin: '0 auto',
  display: 'block',
  quality: 100,
  //border: `3px solid rgba(148, 163, 184, 0.15)`,
}));


const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Home() {
  return (
    <Section id='home'>
      <Stack maxWidth="lg" spacing={2}  direction={{ xs: 'column', sm: 'row' }} alignItems={'center'}>
          <Box width={"75%"} padding={"1rem"}>
            <Typography variant="h2" align="center" color="primary" gutterBottom>
              Nicholas Caro Lopez
            </Typography>
            <Typography variant="body1" align="center" color="primary" gutterBottom>
              Welcome to My Portfolio!
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 2 }}>
              Explore my journey, projects, and experience.
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 2 }}>
              Always open to exploring new opportunites.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" size="large" color="primary">
                <Link 
                  href="https://raw.githubusercontent.com/nicholas489/Resume/master/resume.pdf" 
                  sx={{ textDecoration: 'none', color: 'white' }} 
                  rel="noopener noreferrer"
                >
                  View Resume
                </Link>
              </Button>
            </Box>
          </Box>
          <Box>  
            <ProfileImage src={me} alt="Nicholas Caro Lopez" />
          </Box>
      </Stack>
    </Section>
  );
}