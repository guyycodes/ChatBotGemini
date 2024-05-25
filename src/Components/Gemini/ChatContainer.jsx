import React, {useState} from 'react'
import { FcAssistant } from "react-icons/fc"
import { keyframes } from '@emotion/react';
import { GeminiChatWindow } from './ChatWindow/Chat';
import { Container, CssBaseline, Dialog, DialogContent, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box, 
  Button, 
  Slide, 
  useBreakpointValue
} from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";


export const GeminiChatContainer = () =>{

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Gemini Key goes here")
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("")
  const [iconColor2, setIconColor2] = useState("")
  let leftVar = "9rem"
  const [showChatWindow, setShowChatWindow] = useState(false);
  const rightValue = useBreakpointValue({ base: '0', md: 'calc(100vw - 35vw)' });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onOpen = () =>{
    setOpen(true);
  }

  const onClose = () =>{
    setIsOpen(false);
  }
  const handleChatNowClick = () => {
    setShowChatWindow(true);
  };

  const hide = () =>{
      setShowChatWindow(false)
  }

  const handleFocus = () => {
    if (text === "keys are never saved") {
      setText(''); // Clear the text
    }else{
      setText("keys are never saved")
    }
      
  };

  const handleLike = () => {
    iconColor2 ? setIconColor2("") : iconColor2
    setIconColor("blue.200")
    // store.incrementLikes();
  };

  const handleDislike = () => {
    iconColor ? setIconColor("") : iconColor
    setIconColor2("red.200")
    // store.incrementDislikes()
  };

  const leftHalfMove = keyframes`
  0% {
      width: 0;
      opacity: 0;
      left: 0;
    }
    100% {
      width: auto;
      opacity: 1;
      background: url("https://u-static.fotor.com/images/text-to-image/result/PRO-b684fa1c35d648049a5524d3ac49aaba.jpg") no-repeat center center;
      left: -${leftVar};
    }
  `;
  return (
    
    <Box
      as='aside'
      position='flex'
      zIndex='banner'
      bottom='10'
      width='auto'
      height='auto'
      right='0' 
    >
      <Flex flexDirection='column' alignItems="center"> Hover{/* moves the whole chatbot around */}
        <Box /* moves the whole chatbot hover content around */
          height="auto"
          bg={"gray.100"}
          borderRadius={8}
          width="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)} 
          position="relative"
          sx={{
              '.assistantIcon': {
                position: 'absolute',
                transition: 'all .45s ease-in-out',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1)' : 'scale(0)',
                display: showChatWindow ? 'none' : 1,
              },
              '.fcAboutIcon': {
                clipPath: 'circle(75% at center)', // Initial clipPath value
                transition: 'clip-path .45s ease-in-out',
                display: showChatWindow ? 'none' : 1,
              },
              '.chatNowText': {
                  position: 'absolute',
                  left: `-${leftVar}`,
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  opacity: 0,
                  width: 0,
                  overflow: 'visible',
                  whiteSpace: 'nowrap',
                  animation: isHovered ? `${leftHalfMove} .5s ease-in-out forwards` : null,
                },
              ':hover': {
                '.fcAboutIcon': {
                  clipPath: 'circle(0px at center)', // clipPath value on hover
                  zIndex:-1,
                },
              },
            }}
          >
          <FcGoogle className="fcAboutIcon" size="8rem" style={{borderRadius: "10px", background: "none", transform: 'scaleX(1)' , color: 'white'}} />
          <FcAssistant className="assistantIcon" size="4rem" color="blue"  />
          
        <Button className="chatNowText" onClick={handleChatNowClick}>
          Chat with Gemini👋
        </Button>
      </Box>
    </Flex>
    {/* Adjusts the positioning of the popover */}
    <Box position='fixed' left="30px" zIndex="5">
    <Slide direction="bottom" in={showChatWindow} style={{ bottom: 'calc(100vh - 80vh)' }}>
      <Box>
        {showChatWindow && <GeminiChatWindow hide={hide} apiKey={text} isMobileView={rightValue} />}
      </Box>
    </Slide>
  </Box>
  <Flex direction="column" alignItems="center" justifyContent="center" width="100%" mt={4}>
    <FormControl>
        <FormLabel htmlFor="Gemini" className="input-label"></FormLabel>
        <Input
          className="input-field"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          color={'gray'}
          onClick={handleFocus}
          border={'1px solid black'}
          borderRadius={4}
          bg={'white'}
        />
    </FormControl>
      <Button
        my={2}
        borderRadius={10}
        bg={'gray.100'}
        size="md"
        onClick={onOpen}
        w={'fit-content'}
        px={6} 
        py={3} 
        fontSize="lg" 
        fontWeight="bold" 
        shadow="md" 
        _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
        _active={{ transform: 'translateY(1px)', shadow: 'sm' }} 
      >
     Feedback
    </Button>
  </Flex>
      {/* Like/Dislike buttons */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>
            Feedback Form
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeyrW9aZ8Ln5oeTGKXrdU0KyOWMhePnc-Kyw-2wxLPPw412Zw/viewform?embedded=true"
              width="100%"
              height="800"
            >
              Loading…
            </iframe>
          </DialogContent>
        </Dialog>
    </Box>
  );
};