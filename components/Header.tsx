'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  Divider, 
  Drawer, 
  IconButton,
  Link,
  MenuItem,
  Toolbar, 
  Typography 
} from '@mui/material';
// import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenuItemClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  }

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        color: '#3076db',
        bgcolor: '#1e293b',
        backgroundImage: 'none',
        // mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: {md: 'flex' }, width: "40%" }}>
              <Typography variant="h6" color='#3076db'>
                Nicholas
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button variant="text" size="small">
                <Link href="#home" underline='hover'>
                  Home
                </Link>
            </Button>
            <Button variant="text" size="small">
                <Link href="#about" underline='hover'>
                  About
                </Link>
            </Button>
            <Button variant="text" size="small">
                <Link href="#experience" underline='hover'>
                  Experience
                </Link>
            </Button>
            {/* TODO: 
            <Button variant="text" size="small" sx={{ minWidth: 0 }}>
                <Link href="#projects" underline="hover">
                  Projects
                </Link>
            </Button> */}
            <Button variant="text" size="small">
                <Link href="#skills" underline='hover' sx={{ scrollBehavior: 'smooth' }}>
                  Skills
                </Link>
            </Button>
            <Button variant="text" size="small" sx={{ minWidth: 0 }}>
                <Link href="#contact" underline="hover">
                  Contact
                </Link>
            </Button>
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: '#1e293b', color: '#3076db' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                  
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MenuItem onClick={() => handleMenuItemClick('home')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick('about')}>
                    About
                  </MenuItem >
                  <MenuItem onClick={() => handleMenuItemClick('experience')}>
                    Experience
                  </MenuItem>
                  {/* <MenuItem>Projects</MenuItem> */}
                  <MenuItem onClick={() => handleMenuItemClick('skills')}>
                    Skills
                  </MenuItem>
                </Box>
                <Divider sx={{ my: 1 }} />
                <MenuItem>
                  <Button 
                    color="primary" 
                    variant="contained" 
                    fullWidth
                    onClick={() => handleMenuItemClick('contact')}
                  >
                    Contact
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
