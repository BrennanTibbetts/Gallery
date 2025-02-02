import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Soft purple
    },
    secondary: {
      main: '#03dac6', // Teal accent
    },
    error: {
      main: '#cf6679', // Muted red
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter dark for contrast
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#b0b0b0', // Gray text for subtle contrast
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#ffffff',
          backgroundColor: '#333',
          '&:hover': {
            backgroundColor: '#444',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
        },
      },
    },
  },
});