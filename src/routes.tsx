import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TextLink from './pages/TextLinkPage';
import VideoListen from './pages/VideoListenPage';
import LineByLine from './pages/LineByLinePage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TextLink} />
      <Route path="/video-listen" component={VideoListen} />
      <Route path="/line-by-line" component={LineByLine} />
    </BrowserRouter>
  );
}

export default Routes;
