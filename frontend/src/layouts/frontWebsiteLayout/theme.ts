import { createTheme } from '@mui/material/styles';

// Define your theme colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#ff4081', // Customize your secondary color
    },
    background: {
      default: '#f5f5f5', // Light background for your app
      paper: '#ffffff', // Paper background for cards
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
