'use client';
import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid2, Link, Typography } from '@mui/material';

const projects = [
  {
    title: "Terrahacks Application Portal",
    description: "Developed the 2024 Hackathon portal for Toronto-based University students interested in technology to \
    further their skills, efficiently handling the registration of 473 applicants and 250 participants",
    image: "/terrahacks.png",
    liveDemo: "https://www.terrahacks.ca/",
    languages: "JavaScript, Next / React",
    tools: "Supabase, AWS",
  },
  {
    title: "Machine Learning Match Predictor",
    description: "Predicts the outcomes of La Liga football matches with an 84% precision using machine learning by applying \
    a Random Forest Classifier and provides tools to scrape and prepare the necessary match data",
    image: "/football.png",
    languages: "Python",
    tools: "Selenium, Scikit-learn, Pandas",
  }
];

export default function Projects({ links }: { links: string[]; }) {
    console.log(links)
  
    return (
    <Box id="projects" sx={{ py: 10, background: 'transparent' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="white" gutterBottom>
          Projects
        </Typography>
        <Grid2 container spacing={4}>
          {projects.map((project, idx) => (
            <Grid2 size={{ sm: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  backgroundColor: 'rgba(30,41,59,0.98)',
                  color: '#fff',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px 0 rgba(97,218,251,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.10)',
                  border: '1px solid #22304a',
                  minHeight: 350,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, width: '100%', p: 0 }}>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 700, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 2, color: '#cbd5e1' }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
                    {project.liveDemo && (
                        <Link href={project.liveDemo} target="_blank" rel="noopener" underline="hover" sx={{ color: '#61dafb', fontWeight: 500 }}>
                            &#128187; Live Demo
                        </Link>) 
                    }
                    <Link href={links[idx]} target="_blank" rel="noopener" underline="hover" sx={{ color: '#61dafb', fontWeight: 500 }}>
                      &#128214; GitHub
                    </Link> 
                  </Box>
                  <Typography variant="subtitle2" align="center" sx={{ fontWeight: 700, mt: 1 }}>
                    Languages: <span style={{ fontWeight: 400 }}>{project.languages}</span>
                  </Typography>
                  <Typography variant="subtitle2" align="center" sx={{ fontWeight: 700 }}>
                    Tools: <span style={{ fontWeight: 400 }}>{project.tools}</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}