import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GuyMorganB from '../../../public/GuyMorganB.svg';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { Flex, Link, Icon } from '@chakra-ui/react';

export const LandingPage = () => {

  let navGold = '#ffeaa7';
  let navDark = '#2d3436';

  return (
    <Box>
      {/* Navbar */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        background: `linear-gradient(to right, ${navGold} 60%, ${navDark} 140%)`,
        borderRadius: '10px'
      }}>
        {/* Logo */}
        <Box sx={{ height: 120, width: 120, position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
            <img src={GuyMorganB} alt="Logo" style={{ transform: 'rotate(-10deg)', height: '100%', position: 'absolute', bottom: 0 }} />
        </Box>
        <Flex justify="center" >
          <Link href="https://www.linkedin.com/in/guymorganb" isExternal mr={4}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com/guyycodes" isExternal mr={4}>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://www.threads.net/@guyycodes" isExternal mr={4}>
            <Icon as={SiThreads} boxSize={6} />
          </Link>
          <Link href="https://www.guymorganb.com" isExternal mr={4}>
            guymorganb.com
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61558757112366" isExternal mr={4}>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://t.me/guyycodes" isExternal>
            <Icon as={FaTelegram} boxSize={6} />
          </Link>
      </Flex>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Google Gemini Downloadable Chatbot
        </Typography>
      </Box>
    </Box>
  );
};

