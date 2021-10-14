import React from 'react';

import NextButton from '../components/NextButton';
import { useVideoContext } from '../contexts/videoContext';
import '../styles/pages/text-link-page.css';

import { Helmet} from 'react-helmet'

function TextLink() {
  const { setTextEnglish, setTextPortuguese, setVideoLink } = useVideoContext();

  return (
    <div id="text-link-page">
      <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://text-together.netlify.app/"/>
      <meta property="og:title" content="js title"/>
      <meta property="og:description" content="js description"/>
      <meta property="og:image" content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://text-together.netlify.app/"/>
      <meta property="twitter:title" content="js title"/>
      <meta property="twitter:description" content="js description"/>
      <meta property="twitter:image" content="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
      </Helmet>

      <main>
        <div className="input-block">
          <h2>English</h2>
          <textarea
            name="text-english"
            id="text-english"
            cols={30}
            rows={30}
            onChange={(event) => setTextEnglish(event.target.value)}
          ></textarea>
        </div>

        <div className="input-block">
          <h2>Portuguese</h2>
          <textarea
            name="text-portuguese"
            id="text-portuguese"
            cols={30}
            rows={30}
            onChange={(event) => setTextPortuguese(event.target.value)}
          ></textarea>
        </div>
      </main>

      <footer>
        <div className="link-container">
          <label htmlFor="link-input">Link</label>
          <input
            type="text"
            onChange={(event) => setVideoLink(event.target.value)}
          />
        </div>
        <NextButton to="video-listen" />
      </footer>
    </div>
  );
}

export default TextLink;
