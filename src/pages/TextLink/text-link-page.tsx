import React from 'react';

import './text-link.css';

function TextLink() {
  return (
    <div className="text-link-page">
      <main>
        <div className="input-block">
          <h2>English</h2>
          <textarea
            name="text-english"
            id="text-english"
            cols={30}
            rows={30}
          ></textarea>
        </div>

        <div className="input-block">
          <h2>Portuguese</h2>
          <textarea
            name="text-portuguese"
            id="text-portuguese"
            cols={30}
            rows={30}
          ></textarea>
        </div>
      </main>

      <footer>
        <div className="link-container">
          <label htmlFor="link-input">Link</label>
          <input type="text" />
        </div>
        <div className="button-container">
          <button>Next</button>
        </div>
      </footer>
    </div>
  );
}

export default TextLink;
