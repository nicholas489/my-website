'use client';
import * as React from 'react';
import { Box, Button, Link, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import me from '../../public/me.jpg';

const ProfileImage = styled(Image)(({ theme }) => ({
  width: '235px',
  height: '260px',
  maxWidth: '90vw',
  maxHeight: '90vw',
  objectFit: 'cover',
  padding: theme.spacing(2),
  borderRadius: '50%',
  margin: '0 auto',
  display: 'block',
  quality: 100,
}));


const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
}));

export default function Home() {
  return (
    <Section id='home'>
      <Stack maxWidth="lg" spacing={2}  direction={{ xs: 'column', sm: 'row' }} alignItems={'center'}>
          <Box width={"75%"} padding={"1rem"}>
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Nicholas Caro Lopez
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Welcome to My Portfolio!
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 2 }}>
              Explore my journey, projects, and experience.
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 2 }}>
              Always open to exploring new opportunites.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" size="large" color="primary">
                <Link 
                  href="https://raw.githubusercontent.com/nicholas489/Resume/master/resume.pdf" 
                  sx={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} 
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