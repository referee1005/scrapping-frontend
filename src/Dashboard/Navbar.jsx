import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { LoginModal } from './LoginModal';

export default function Navbar() {
    const [openLoginModal,setOpenLoginModal]=useState(false)
    const openLogin=()=>{
        setOpenLoginModal(true)
    }
    const closeLogin = () => {
        setOpenLoginModal(false);
      };

  return (
    <>
        <AppBar position="static" className='header_bar'>
            <Toolbar>
                {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
                </IconButton> */}
                <Toolbar className='logo_branding'>
                    LingoWorld
                </Toolbar>
                <Toolbar className='navigation ml-auto'>
                    <Link color="inherit">About</Link>
                    <Link color="inherit">Benefit</Link>
                    <Link color="inherit">Outsource</Link>
                    <Link color="inherit">Userguide</Link>
                    <Link color="inherit" className='button_white'>Aligner</Link>
                    <Link><span onClick={openLogin}><img src='./img/author.svg'/></span></Link>
                </Toolbar>
            </Toolbar>
        </AppBar>
        <LoginModal open={openLoginModal}
        handleClose={closeLogin}/>
    </>
  )
}