import React from 'react';
import { Box, Flex, Link, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.100">
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
  );
};