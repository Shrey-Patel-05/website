"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from "next/link";
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
    // { label: "Hobbies", path: "/hobbies" },
    { label: "CV", path: "/cv" },
  ];

  return (
    <div position="static" className="bg-amber-200 max-w-full" style={{
      backgroundColor: "#374151",
      boxShadow: "0 0 12px rgba(0,255,0,0.4)", // subtle neon green shadow
      borderBottom: "2px solid #ffffff", // neon green accent line
    }}>
      <div className="flex flex-wrap justify-center gap-10">
        {buttons.map((button, index) => (
          // <a href={button.path} key={index} className="space-2 p-2 ">  {button.label} </a>
          <div key={index} className='flex flex-row text-center items-center justify-center'>
            <Button
              href={button.path}
              component={Link}
              sx={{
                my: 2, color: 'white', display: 'block', fontFamily: 'var(--font-conthrax)',
                fontWeight: 600,
                fontSize: { xs: "0.6rem", sm: "0.6rem", md: "1rem", lg: "2rem" },
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#10b981",
                  textShadow: "0 0 8px #10b981",
                  transform: "scale(1.05)",
                },
              }}


            >
              {button.label}
            </Button>
            {buttons.length != index && <div
              component="span"
              sx={{
                color: 'white',
                fontSize: { xs: "0.6rem", sm: "0.6rem", md: "1rem", lg: "2rem" },
              }}
            >

            </div>}

          </div>
        ))}
      </div>

    </div>
  );
}
export default ResponsiveAppBar;