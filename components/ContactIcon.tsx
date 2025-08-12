import * as React from 'react';
import Image from 'next/image';
import { Grid2, Link, styled }  from '@mui/material';

const HoverImage = styled(Image)(() => ({
    filter: 'invert(1) brightness(2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
    transform: 'scale(1.05)',
  },
}));

interface ContactCardProps {
    href: string;
    src: string;
    alt: string;
}

export default function ContactCard({ href, src, alt }: ContactCardProps) {
    return (
        <Grid2 container size={{ xs: 12, sm: 3 }} justifyContent="center" alignItems="center">
            <Link href={href} target="_blank" rel="noopener">
                <HoverImage 
                    src={src}
                    width={100}
                    height={100}
                    alt={alt}
                    style={{width: "100px", height: "100px",  objectFit: "contain" }}
                />
            </Link>
        </Grid2>
    );
}