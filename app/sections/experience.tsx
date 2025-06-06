'use client';
import * as React from 'react';
import { Box, Container, Grid2, Typography, styled } from '@mui/material';
import JobCard from '@/components/JobCard';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Experience() {
    return (
        <Section id='experience'>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Work Experience
            </Typography>
            <Grid2 container spacing={4}>
              <JobCard 
                iconSrc="/svg/dayforce.svg"
                iconPadding={13}
                companyName="Dayforce (formerly Ceridian)"
                companyUrl='https://dayforce.com'
                role="Software Developer Intern"
                duration="May 2024 - Apr 2025"
                description="Designed, built, and maintained core authentication and session management 
                microservices powering Dayforce’s secure login and MFA workflows, utilizing .NET/C#, 
                ReactJS, and SQL Server."
              />
              <JobCard 
                iconSrc="/svg/tmu.svg"
                companyName="Laboratory for Translational Medicine, Toronto Metropolitan University"
                companyUrl='https://torontomu.ca/laboratory-translational-medicine/'
                role="Software Engineer"
                duration="Sep 2023 - Apr 2024"
                description="Researched and developed an advanced, image-based motion-tracking extension 
                for the open-source 3D Slicer platform using Python, PyQt, and Docker, to improve success rates in radiation therapy 
                treatment planning."
              />
            </Grid2>
          </Container>
        </Section>
    );
}