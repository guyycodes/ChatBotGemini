import { extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors and global styles
const Theme = extendTheme({
  // Add your color modes config
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  // Global styles that depend on color mode
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
      'html, body, #root, div': {
        boxSizing: 'border-box',
        margin: "0px",
        border: "0px",
        // width: '100vw',
  
      },
      // more global styles here
    }),
  },
});


export default Theme;