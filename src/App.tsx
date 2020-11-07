import React from 'react';

import Routes from './routes';
import { VideoContextProvider } from './contexts/videoContext';
import 'dotenv/config';

import './app.css';

function App() {
  return (
    <VideoContextProvider>
      <Routes />
    </VideoContextProvider>
  );
}

export default App;
