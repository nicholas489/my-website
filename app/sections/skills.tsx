'use client';
import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid2, styled, Typography } from "@mui/material";

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
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/python.svg" alt="Python Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            Python
                        </Typography>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/csharp.svg" alt="C# Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            C#
                        </Typography>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/dotnet.svg" alt=".NET Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            .NET
                        </Typography>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/javascript.svg" alt="JavaScript Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            JavaScript
                        </Typography>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/react.svg" alt="React Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            React
                        </Typography>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
                        <Image src="/svg/java.svg" alt="React Logo" width={100} height={100} />
                        <Typography variant="body1" align="center" color="textSecondary">
                            Java
                        </Typography>
                    </Grid2>
                </Grid2>
          </Container>
        </Section>
    );
}