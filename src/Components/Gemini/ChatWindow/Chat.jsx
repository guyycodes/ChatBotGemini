import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, Button, Text, VStack, Heading, Spinner } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export const GeminiChatWindow = ({ hide, apiKey, isMobileView }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [API_KEY, setAPI_KEY] = useState(apiKey)
  const chatWindowRef = useRef(null);
  const chatWindowRef2 = useRef(null);
  
  const [messages, setMessages] = useState([
    {
      history: [
          {"role": "user", "parts": [{"text": "You are a react.js and chakra ui coding assistant, you answer coding questions"}]},
          {"role": "model", "parts": [{"text": "Great to meet you. What would you like to know?"}]},
      ],
      generationConfig: {
        "maxOutputTokens": 50000,
      },
    }
  ]);

  const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 200,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
  };
  
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});
  
  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    chatWindowRef2.current.scrollTop = chatWindowRef2.current.scrollHeight;
    setAPI_KEY(apiKey)

  }, [messages, isTyping, apiKey]);
  
  useEffect(() => {
    if(isMobileView == '2em'){
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        hide();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [hide]); // Ensure `hide` is stable or wrapped in useCallback if defined within a parent component
  

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleKeyPress = (e, message) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Check if Enter key is pressed without Shift key
      e.preventDefault(); // Prevent the default action to avoid newline in input
      handleSend(message);
      setInputMessage('');
    }
  }

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      direction: 'outgoing',
      sender: "user"
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    
    setInputMessage('');
    setIsTyping(true);
    await  formatMessages(message);  // make sure to pass all the messages
  };

  // Format messages for API
  const formatMessages = async (chatMessage) => {

    const chat = model.startChat(messages);

    try{
      // Send your message to the ongoing chat
     const result = await chat.sendMessage(chatMessage);
      // Get the response from the result
      const response = result.response;
      const text = response.candidates[0].content.parts[0].text;
      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, { message: text, sender: "gemini-pro" },]);
    }catch(err){
      console.error(err)
    } 
  }

// Format messages for API
const callApi = async () => {

  // let apiMessages = messages.map((messageObject) => {
  //   let role = messageObject.sender === "ChatGPT"?"assistant":"user"
  //   return { role: role, content: messageObject.message}
  // });
  
  

  // const config = {
  //   headers: {
  //     "Authorization": `Bearer ${API_KEY}`,
  //     "Content-Type": "application/json",
  //   }
  // };

    try {
      axios.get("https://gaslightai.com/api/get")
      .then(response => console.log(response))
      .catch(error => console.error(error));
      //const data = response.data

      // Extract the assistant's message from the response
      // const assistantMessage = data.choices[0].message.content; // this is correct
      
        // Create a new message object with only the necessary properties
      // const newMessage = {
      //   message: assistantMessage,
      //   sender: "ChatGPT"
      // };
      
      // setMessages([...messages, newMessage]);
      // console.log(messages);
      // setIsTyping(false);
    } catch (error) {
      window.alert(error);
      console.error('Error:', error);
    }
  } // end of formatMessage

  return (
    <Box
      width="400px"
      height="500px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      position="fixed"
      top="55%"
      left="50%"
      transform="translate(-50%, -50%)"
      boxShadow="md"
      ref={chatWindowRef}
      bg="white"
    >
            {/* Header Section */}
      <VStack
        p="4"
        bgGradient="linear(to-r, blue.200, blue.300)"
        borderTopRadius="md"
        alignItems="flex-start"
        spacing={1}
      >
        <Heading as="h3" size="sm" color="white">
          Chat with Gemini - Visit Google AI to get API key<br></br>
          <strong> - paste it above the 'feedback' button. Or contact me through feedback for a key.</strong>
        </Heading>
        <Text color="white" fontSize="xs">
          Found this useful? Leave some feedback...
        </Text>
          <CloseIcon color="red.500" onClick={hide} cursor="pointer"/>
      </VStack>
        {/* Messages Section */}
    <Box flex="1" overflowY="auto" p="4" display="flex" flexDirection="column" ref={chatWindowRef2}>
      {messages.map((message, index) => (
      <Box
        key={index}
        bg={message.sender === 'user' ? 'blue.100' : 'gray.100'}
        borderRadius="md"
        p="2"
        mb="2"
        alignSelf={message.sender === 'user' ? 'flex-start' : 'flex-end'}
        maxWidth="80%"
      >{/* Note, the api response is sending back several blank responses */}
        <ReactMarkdown>{message.message}</ReactMarkdown>
      </Box>
        ))}
        {isTyping && (  
          <Box
            bg="gray.100"
            borderRadius="md"
            p="2"
            mb="2"
            alignSelf="flex-start"
            maxWidth="80%"
            display="flex"
            alignItems="center"
          >
            <Spinner size="sm" mr="2" />
            <Text>Typing...</Text>
          </Box>
      )}
    </Box>
    {/* Handlesthe input text */}
      <Box p="4" borderTopWidth="1px">
        <Input
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          onKeyDown={(e) => handleKeyPress(e,inputMessage)}
          mr="2"
          border={'1px solid black'}
          borderRadius={4}
          bg={'white'}
        />
        <Button         
          my={2}
          borderRadius={10}
          bg={'gray.100'}
          onClick={() => { handleSend(inputMessage); callApi() }} colorScheme="blue" mr={4} mt={2}
          size="md"
          w={'fit-content'}
          px={6} 
          py={3} 
          fontSize="lg" 
          fontWeight="bold" 
          shadow="md" 
          _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          _active={{ transform: 'translateY(1px)', shadow: 'sm' }}>
          Send
        </Button>
      </Box>
    </Box>
  );  
}