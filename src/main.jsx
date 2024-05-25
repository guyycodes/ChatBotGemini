import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './Theme'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { registerSW } from 'virtual:pwa-register';


const muiTheme = createTheme();

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Show a prompt to the user asking them if they want to refresh the page to use the new version
    if (confirm("A new version is available, do you want to refresh?")) {
      updateSW();
    }
  },
  onOfflineReady() {
    // Show a message when the app is ready to work offline
    console.log("The app is ready to work offline!");
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <MuiThemeProvider theme={muiTheme}>
      <App />
      </MuiThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
