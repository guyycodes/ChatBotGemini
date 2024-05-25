import { useState } from 'react';
import { Announcement } from './Components/announcementBar/announcement' 
import { Footer } from './Components/Footer/theFooter'
import { Container, Box, CssBaseline, useTheme } from '@mui/material';
import { LandingPage } from './Components/Navbar/ComboComponent';
// import { MyFeed } from './Components/FeedbackBlog/Feedback';
import { GeminiChatContainer } from './Components/Gemini/ChatContainer'
import { AdBannerCarousel } from './Components/AdsCarousel/Carousel';
import { AdBannerCarousel2 } from './Components/AdsCarousel/Carousel2';
function App() {

  const headerHeight = '64px'; // Example fixed header height

  return (
    <>
      <CssBaseline /> {/* MUI component to ensure consistent baselines */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          //background: `linear-gradient(to left, ${theme.palette.teal[300]}, ${theme.palette.blue[500]})` // Adapted bgGradient to MUI
        }}
      >
        <Box 
          component='header'
          sx={{
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            left: 0, 
            zIndex: 'tooltip', // Tooltip zIndex is relatively high; adjust as needed
            height: headerHeight, // Fixed height for the header
          }}
        >
          <Announcement />
        </Box>
        
        {/* Main content container with paddingTop to compensate for the fixed header's height */}
        <Container 
          component="main" 
          sx={{
            flex: '1',
            mt: headerHeight, // This margin-top pushes the container down by the header's height
          }}
        >
          <LandingPage />
          <GeminiChatContainer />

        </Container>

        <Box mb={'8rem'}>
        <Box my={1}> {/* Add bottom margin */}
          <AdBannerCarousel />
        </Box>

        <Box> {/* Alternatively, add top margin to the second component */}
          <AdBannerCarousel2 />
        </Box>
      </Box>
        
        <Footer />
      </Box>
    </>
  );
}

export default App;
