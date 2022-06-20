import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography: {
    h4: {
      color: '#252525'
    }
  },
  palette: {
    background: {
      default: '#eef0f1'
    },
    info: {
      main: '#2b9eb3',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID!}
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
