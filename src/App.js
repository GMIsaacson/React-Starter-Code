import React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './aboutus';
import Navigation from './component/navigations';
import Homepage from './pages/homepage';
import Services from './pages/services';



const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // SpaceX blue
    },
    secondary: {
      main: '#FFD700', // SpaceX gold
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000000', // Black
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#000000', // Black
    },
    body1: {
      fontSize: '1rem',
      color: '#333333', // Dark gray
    },
  },
});

const StyledApp = styled('div')`
  background-color: #f5f5f5; /* Light gray background */
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <header className="App-header">
          <Navigation />
          <Routes>
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </header>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;


