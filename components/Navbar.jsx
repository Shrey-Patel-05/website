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
    { label: "Hobbies", path: "/hobbies" },
    { label: "CV", path: "/cv" },
  ];

  return (
    <AppBar position="static" className="bg-amber-200 max-w-full" sx={{ backgroundColor: "#374151" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="flex flex-wrap justify-center" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {buttons.map((button, index) => (
              // <a href={button.path} key={index} className="space-2 p-2 ">  {button.label} </a>
              <div key={index} className='flex flex-row text-center items-center justify-center'>
                <Button 
                  href={button.path}
                  component="a"
                  className=' md:text-sm !text-xl'
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'var(--font-conthrax)', }}
                >
                  {button.label}
                </Button>
                {buttons.length - 1 != index && <p>|</p>}
              </div>
            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;