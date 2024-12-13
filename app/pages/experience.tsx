'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Experience() {
    // TODO: Replace Grid component with Grid2 component
    return (
        <Section>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Experience
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" color="primary">
                  Software Developer Intern @ Dayforce (formerly Ceridian)
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Description of your role, achievements, and contributions.
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