import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TextLink from './pages/TextLinkPage';
import VideoListen from './pages/VideoListenPage';
import LineByLine from './pages/LineByLinePage';
import VideoListenWithText from './pages/VideoListenWithText';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TextLink} />
      <Route path="/video-listen" component={VideoListen} />
      <Route path="/line-by-line" component={LineByLine} />
      <Route path="/listen-with-text" component={VideoListenWithText} />
    </BrowserRouter>
  );
}

export default Routes;
