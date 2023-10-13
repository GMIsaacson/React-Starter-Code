import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHomepage = styled('div')`
  background-color: #000;
  color: #fff;
  padding: 40px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #007BFF; /* SpaceX blue */
  color: #fff;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Container>
        <Typography variant="h1" component="div" gutterBottom>
          Welcome to SpaceX
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore the future of space exploration with SpaceX.
        </Typography>
        <StyledButton variant="contained">Get Started</StyledButton>
      </Container>
    </StyledHomepage>
  );
}

export default Homepage;
