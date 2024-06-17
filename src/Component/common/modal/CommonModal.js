import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button } from '@mui/material';

const CommonModal = ({ title, content, open, onCancel, footer, width }) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width || 400, // Default width if not provided
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4, 
  };
  
  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography variant="h6" id="modal-modal-title">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='font-semibold'>{content}</div>
        </Typography>
        {footer && (
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            {footer}
          </Box>
        )}
        {!footer && (
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={onCancel} variant='contained' color="primary">
              Close
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default CommonModal;
