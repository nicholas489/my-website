import Image from 'next/image';
import { Grid2, Typography } from "@mui/material";

export default function SkillIcon({ src, caption }: { src: string; caption: string }) {
    return (
        <Grid2 container size={{ xs: 12, sm: 4, md: 2 }} direction={'column'} justifyContent="center" alignItems="center" spacing={2}>
            <Image src={src} alt={`${caption} Logo`} width={100} height={100} />
            <Typography variant="body1" align="center">
                {caption}
            </Typography>
        </Grid2>
    );
}