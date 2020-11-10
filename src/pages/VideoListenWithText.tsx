import React from 'react';
import YouTube from 'react-youtube';

import NextButton from '../components/NextButton';
import { useVideoContext } from '../contexts/videoContext';
import '../styles/pages/video-listen-with-text-page.css';

function VideoListenPageWithText() {
  const { videoID, textEnglish, videoTitle } = useVideoContext();

  return (
    <div id="video-listen-with-text">
      <div className="text-video-container">
        <div className="text-container">
          <h1>{videoTitle || 'Do Better – Motivational Video'}</h1>
          <p>{textEnglish}</p>
        </div>
        <div className="video-container">
          <YouTube
            videoId={videoID}
            opts={{ height: '400px', width: '600px' }}
          />
        </div>
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

export default VideoListenPageWithText;
