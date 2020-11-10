import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TextLink from './pages/TextLinkPage';
import VideoListen from './pages/VideoListenPage';
import LineByLine from './pages/LineByLinePage';
import VideoListenWithText from './pages/VideoListenWithText';
import OnlyVideoListen from './pages/OnlyVideoListen';
import FinishPage from './pages/FinishPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TextLink} />
      <Route path="/video-listen" component={VideoListen} />
      <Route path="/line-by-line" component={LineByLine} />
      <Route path="/listen-with-text" component={VideoListenWithText} />
      <Route path="/only-video-listen" component={OnlyVideoListen} />
      <Route path="/finish-page" component={FinishPage} />
    </BrowserRouter>
  );
}

export default Routes;
