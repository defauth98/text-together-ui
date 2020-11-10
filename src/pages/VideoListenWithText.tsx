import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import NextButton from '../components/NextButton';
import { useVideoContext } from '../contexts/videoContext';
import '../styles/pages/video-listen-with-text-page.css';

function VideoListenPageWithText() {
  const [videoIDstate, setVideoId] = useState('');

  const { textEnglish, videoTitle, videoLink } = useVideoContext();

  useEffect(() => {
    setVideoId(getVideoIdFromUrl(String(videoLink)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getVideoIdFromUrl(url: String) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : '';
  }

  return (
    <div id="video-listen-with-text">
      <div className="text-video-container">
        <div className="text-container">
          <h1>{videoTitle || 'Do Better – Motivational Video'}</h1>
          <p>{textEnglish}</p>
        </div>
        <div className="video-container">
          <YouTube
            videoId={videoIDstate}
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

      <NextButton to="/only-video-listen" />
    </div>
  );
}

export default VideoListenPageWithText;
