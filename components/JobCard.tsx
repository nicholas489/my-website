'use client';
import * as React from 'react';
import {Avatar, Box, Card, CardContent, Grid2, Link, Typography } from '@mui/material';
import Image from 'next/image';

interface JobCardProps {
    iconSrc: string;
    iconPadding?: number;
    companyName: string;
    companyUrl: string;
    role: string;
    duration: string;
    description: string;
}

export default function JobCard({ iconSrc, iconPadding = 0, companyName, companyUrl, role, duration, description }: JobCardProps) {
    return (
       <Grid2 
            size={{ sm: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
                sx={{
                    position: "relative",
                    bgcolor: "#1e293b", 
                    borderRadius: 2,            
                    boxShadow: '0 8px 32px 0 rgba(97,218,251,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.10)',
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,                      
                    maxWidth: 600,
                    color: "#f1f5f9" 
                }}
            >

            {/* Left: Circular logo */}
            <Avatar
                sx={{
                    bgcolor: "transparent",
                    width: 64,
                    height: 64,
                    mr: 2
                }}
            >
                <Image
                    src={iconSrc}
                    alt={`${companyName} logo`}
                    width={64}
                    height={64}
                    style={{
                        // width: "100%",
                        // height: "100%",
                        // objectFit: "contain",
                        padding: iconPadding,
                        //margin: 0,
                    }}
                />
            </Avatar>

            {/* Right: Content */}
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Grid2 container>
                    <Grid2 size={8}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, lineHeight: 1.2, color: "#f1f5f9" }}
                        >
                            {companyName}
                        </Typography>
                    </Grid2>
                    <Grid2 size={4} sx={{ textAlign: "center" }}>
                        <Box
                            sx={{
                                bgcolor: "rgba(100, 116, 139, 0.2)",
                                borderRadius: "999px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "#e2e8f0", fontWeight: 500 }}
                            >
                                {duration}
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
        
                <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: "inline-block",
                        mt: 0.5,
                        mb: 1,
                        color: "#3b82f6", // Blue-500
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    {companyUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </Link>

                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, mb: 1, color: "#f1f5f9" }}
                >
                    {role}
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ color: "#cbd5e1", lineHeight: 1.5 }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
       </Grid2>
       
    );
}