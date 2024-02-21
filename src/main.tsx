import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { common } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: common.black
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={outerTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
