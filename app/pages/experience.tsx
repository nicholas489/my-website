'use client';
import * as React from 'react';
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Experience() {
    // TODO: Replace Grid component with Grid2 component
    return (
        <Section id='experience'>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Work Experience
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" color="primary">
                  Software Developer Intern @ Dayforce (formerly Ceridian)
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Designed, built, and maintained the core authentication and session-management microservices that power Dayforce’s secure 
                  login and MFA workflows using .NET/C#, ReactJS and SQL Server. 
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" color="primary">
                  Software Engineer @ Laboratory for Translational Medicine, TMU
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Description of your role, achievements, and contributions.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
    );
}