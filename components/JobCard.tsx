'use client';
import * as React from 'react';
import {Grid2, Typography } from '@mui/material';

interface JobCardProps {
    role: string;
    company: string;
    description: string;
}

export default function JobCard({ role, company, description }: JobCardProps) {
    return (
        <Grid2 size={{ xs: 12, md: 6}} justifyContent="center" alignItems="center">
            <Typography variant="h5" color="primary">
                {role} @ {company}
            </Typography>
            <Typography variant="body1" color="textSecondary">
                {description} 
            </Typography>
        </Grid2>
    );
}