import React, { useEffect, useState } from 'react';

import YouTube from 'react-youtube';
import NextButton from '../components/NextButton';

import '../styles/pages/only-video-listen-page.css';

import 'dotenv/config';
import { useVideoContext } from '../contexts/videoContext';

function OnlyVideoListenPage() {
  const [videoId, setVideoId] = useState('');
  const { videoTitle, videoLink } = useVideoContext();

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
    <div id="only-video-listen-page">
      <h1>{videoTitle}</h1>
      <div className="video-container">
        <YouTube
          videoId={videoId}
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
      <NextButton to="/finish-page" />
    </div>
  );
}

export default OnlyVideoListenPage;
