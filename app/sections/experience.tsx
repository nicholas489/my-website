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
                role="Software Developer Intern"
                company="Dayforce (formerly Ceridian)"
                description="Designed, built, and maintained the core authentication and session-management 
                microservices that power Dayforce’s secure login and MFA workflows using .NET/C#, ReactJS 
                and SQL Server."
              />
              <JobCard 
                role="Software Engineer"
                company="Laboratory for Translational Medicine, TMU"
                description="Researched and developed an advanced image‐based motion‐tracking extension into 
                the open‐source 3D Slicer platform using Python, PyQt, and Docker—to improve success rates in 
                radiation therapy treatment planning."
              />
            </Grid2>
          </Container>
        </Section>
    );
}