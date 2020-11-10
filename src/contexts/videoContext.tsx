import Axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface VideoData {
  textPortuguese?: string;
  textEnglish?: string;
  videoLink?: string;
  videoTitle?: string;
  videoID?: string;

  setVideoLink(link: string): void;
  setTextPortuguese(text: string): void;
  setTextEnglish(text: string): void;
  setVideoTitle(title: string): void;
  setVideoId(videoId: string): void;
}

const VideoContext = createContext<VideoData>({} as VideoData);

export const VideoContextProvider: React.FC = ({ children }) => {
  const [textPortuguese, setTextPortuguese] = useState('');
  const [textEnglish, setTextEnglish] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoID, setVideoId] = useState('');

  useEffect(() => {
    async function getVideoTitle() {
      const response = await Axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&fields=items(id%2Csnippet)&key=AIzaSyCUoWlk_yFUXfrM-9ekpxBMT_btLblB2U0`
      );

      setVideoTitle(
        response.data.items[0].snippet.title
          ? response.data.items[0].snippet.title
          : 'Título do vídeo'
      );
    }

    if (videoID) getVideoTitle();
  }, [videoID]);

  useEffect(() => {
    if (textEnglish.split('\n')[0].substr(0, 1) === '1') {
      const allLines = textEnglish.split('\n');

      const filteredLines = allLines.filter((line) => {
        if (line.trim().length === 0) {
          return false;
        }
        return true;
      });

      const withoutNumbersAndLineStart = filteredLines.map((line) =>
        line.slice(4, line.length).trim()
      );

      setTextEnglish(withoutNumbersAndLineStart.toString());
    }
  }, [textEnglish]);

  useEffect(() => {
    if (textPortuguese.split('\n')[0].substr(0, 1) === '1') {
      const allLines = textPortuguese.split('\n');

      const filteredLines = allLines.filter((line) => {
        if (line.trim().length === 0) {
          return false;
        }
        return true;
      });

      const withoutNumbersAndLineStart = filteredLines.map((line) =>
        line.slice(4, line.length).trim()
      );

      setTextPortuguese(withoutNumbersAndLineStart.toString());
    }
  }, [textPortuguese]);

  return (
    <VideoContext.Provider
      value={
        {
          textEnglish,
          textPortuguese,
          videoLink,
          videoTitle,
          setTextPortuguese,
          setTextEnglish,
          setVideoLink,
          setVideoTitle,
          setVideoId,
        } as VideoData
      }
    >
      {children}
    </VideoContext.Provider>
  );
};

export function useVideoContext() {
  const context = useContext(VideoContext);

  return context;
}
