import React from 'react';

import YouTube from 'react-youtube';
import NextButton from '../components/NextButton';

import '../styles/pages/only-video-listen-page.css';

import 'dotenv/config';
import { useVideoContext } from '../contexts/videoContext';

function VideoListenPage() {
  const { videoTitle, videoID } = useVideoContext();

  return (
    <div id="only-video-listen-page">
      <h1>{videoTitle}</h1>
      <div className="video-container">
        <YouTube
          videoId={videoID}
          opts={{ height: '600px', width: '1200px' }}
        />
      </div>

      <div className="checkbox-wrapper">
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-1" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-1" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-1" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-1" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-1" />
        </div>
      </div>
      <NextButton to="/line-by-line" />
    </div>
  );
}

export default VideoListenPage;
