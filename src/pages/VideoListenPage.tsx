import React, { useEffect, useState } from 'react';

import YouTube from 'react-youtube';
import NextButton from '../components/NextButton';

import '../styles/pages/video-listen-page.css';

import 'dotenv/config';
import { useVideoContext } from '../contexts/videoContext';

function VideoListenPage() {
  const { videoLink, videoTitle, setVideoId } = useVideoContext();

  const [videoIdFromUrl, setVideoIdFromUrl] = useState('');

  useEffect(() => {
    const videoIdFromUrl = getVideoIdFromUrl(String(videoLink));

    setVideoIdFromUrl(videoIdFromUrl);
    setVideoId(videoIdFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoLink]);

  function getVideoIdFromUrl(url: String) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : '';
  }

  return (
    <div id="video-listen-page">
      <h1>{videoTitle}</h1>
      <div className="video-container">
        <YouTube
          videoId={videoIdFromUrl}
          opts={{ height: '600px', width: '1200px' }}
        />
      </div>
      <NextButton to="/" />
    </div>
  );
}

export default VideoListenPage;
