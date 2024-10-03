import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for the lead capture form
const LeadCaptureFormContainer = styled('form')(({ theme }) => ({
  padding: '20px',
  backgroundColor: 'cornsilk',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
}));

const LeadCaptureInput = styled(TextField)(({ theme }) => ({
  marginTop: '10px',
  marginBottom: '20px',
  width: '100%',
  maxWidth: '400px',
  backgroundColor: "#fff",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#007BFF',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  marginTop: '10px',
  display: "block",
}));

const LeadCaptureForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can add your email and name submission logic
    console.log('Form submitted:', { name, email });
    setSubmitted(true);
  };

  return (
    <LeadCaptureFormContainer onSubmit={handleFormSubmit}>
      <Typography variant="h6">Find This Interesting?</Typography>
      <Typography>
        Are you trying to digitize your non-profit's consumer-facing paperwork or streamline your operations?
        Enter your details below to get in touch and receive more information on how we can help.
      </Typography>
      {!submitted ? (
        <>
          <LeadCaptureInput
            label="Your Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <LeadCaptureInput
            label="Your Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <ButtonStyled type="submit" variant="contained" size="large">
            Get in Touch
          </ButtonStyled>
        </>
      ) : (
        <Typography variant="h6" color="primary">
          Thank you, {name}! We will be in touch soon.
        </Typography>
      )}
    </LeadCaptureFormContainer>
  );
};

export default LeadCaptureForm;
