'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
}));

const ProjectCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    boxShadow: theme.shadows[4],
    '&:hover': {
      boxShadow: theme.shadows[8],
    },
}));

export default function Projects() {
    // TODO: Replace Grid component with Grid2 component
    return (
        <Section sx={{ backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {[1, 2, 3, 4].map((project) => (
                        <Grid item xs={12} sm={6} md={3} key={project}>
                            <ProjectCard>
                                <Typography variant="h6" color="primary">
                                    Project {project}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Brief description of the project.
                                </Typography>
                            </ProjectCard>
                        </Grid>
                    ))}
                </Grid>
          </Container>
        </Section>
    );
}