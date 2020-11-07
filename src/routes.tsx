import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TextLink from './pages/TextLinkPage';
import VideoListen from './pages/VideoListenPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TextLink} />
      <Route path="/video-listen" component={VideoListen} />
    </BrowserRouter>
  );
}

export default Routes;
