'use client';
import * as React from 'react';
import { Box, Container, Grid2, styled, Typography } from "@mui/material";
import SkillIcon from '@/components/SkillIcon';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.default,
}));

export default function Skills() {
    return (
        <Section id='skills'>
            <Container maxWidth="md">
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom sx={{ mb: 4 }}>
                    Skills
                </Typography>
                <Grid2 container direction={'row'} spacing={{ xs: 8, sm: 4, md: 8 }} sx={{justifyContent: 'space-evenly'}}>
                    <SkillIcon 
                        src="/svg/python.svg"
                        caption="Python"
                    />
                    <SkillIcon
                        src="/svg/csharp.svg"
                        caption="C#"
                    />
                    <SkillIcon
                        src="/svg/dotnet.svg"
                        caption=".NET"
                    />
                    <SkillIcon
                        src="/svg/javascript.svg"
                        caption="JavaScript"
                    />
                    <SkillIcon
                        src="/svg/react.svg"
                        caption="React"
                    />
                    <SkillIcon
                        src="/svg/java.svg"
                        caption="Java"
                    />
                </Grid2>
          </Container>
        </Section>
    );
}