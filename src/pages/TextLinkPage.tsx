import React from 'react';

import NextButton from '../components/NextButton';
import { useVideoContext } from '../contexts/videoContext';
import '../styles/pages/text-link-page.css';

function TextLink() {
  const { setTextEnglish, setTextPortuguese, setVideoLink } = useVideoContext();

  return (
    <div id="text-link-page">
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
