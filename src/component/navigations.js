import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)`
  background-color: #000; /* SpaceX black */
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
  &:hover {
    color: #007BFF; /* SpaceX blue on hover */
  }
`;

const Navigation = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div">
        SpaceX
      </Typography>
      <StyledLink to="/homepage">Home</StyledLink>
      <StyledLink to="/aboutus">About Us</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <Button variant="contained" color="primary">
        Contact Us
      </Button>
    </Toolbar>
  </StyledAppBar>
);

export default Navigation;
