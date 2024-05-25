import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { ThumbUp, ThumbDown } from '@mui/icons-material';


export const MyFeed = () => {

  const [iconColor, setIconColor] = useState("default");
  const [iconColor2, setIconColor2] = useState("default");
  const [isOpen, setIsOpen] = useState(false);


  const handleLike = () => {
    setIconColor(prev => (prev === "primary" ? "default" : "primary"));
    setIconColor2("default");
  };

  const handleDislike = () => {
    setIconColor2(prev => (prev === "secondary" ? "default" : "secondary"));
    setIconColor("default");
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };


  return (
    <Box>
      {/* Main Content */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={onOpen} sx={{ mt: 2, mb: 4 }}>
          Feedback Blog
        </Button>
        
        {/* Like/Dislike buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' }}>
          <IconButton color={iconColor} onClick={handleLike}>
            <ThumbUp />
          </IconButton>
          <IconButton color={iconColor2} onClick={handleDislike}>
            <ThumbDown />
          </IconButton>
        </Box>
      </Box>

      {/* Feedback Modal */}
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          {/* Modal Content Here, for example, an embedded form */}
          <Typography variant="h6">
            Thank you for your feedback!
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

