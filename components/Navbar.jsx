
// import React from 'react'


// const Navbar = () => {
//     const buttons = [
//         { label: "Home", path: "/" },
//         { label: "Projects", path: "/projects" },
//     ];
//     return (

//         <>
//             <nav className="fixed top-[-22] left-0 mt-8 z-30  w-full  hidden md:flex justify-center  text-sm">
//                 <div className="flex flew-row  w-full h-20 bg-red-400 items-center ">
//                     {buttons.map((button, index) => (
//                         <a href={button.path} key={index} className="space-2 p-2 ">  {button.label} </a>
//                     ))}

//                 </div>

//             </nav>
//         </>



//     )
// }

// export default Navbar


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const buttons = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <AppBar position="static" className="bg-amber-200" sx={{ backgroundColor: "#374151" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


          <div className="flex-grow flex md:hidden">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >

              {buttons.map((button, index) => (
                // <a href={button.path} key={index} className="space-2 p-2 ">  {button.label} </a>
                <MenuItem key={index} href={button.path}
                  sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'var(--font-geist-mono)', }}
                >
                  {button.label}

                </MenuItem>
              ))}
            </Menu>
          </div>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'var(--font-geist-sans)',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {buttons.map((button, index) => (
              // <a href={button.path} key={index} className="space-2 p-2 ">  {button.label} </a>
              <Button
                key={index}
                href={button.path}
                component="a"
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'var(--font-geist-mono)', }}
              >
                {button.label}
              </Button>
            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;