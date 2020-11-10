import React, { useEffect, useState } from 'react';
import sbd from 'sbd';
import { useVideoContext } from '../contexts/videoContext';

import '../styles/pages/line-by-line-page.css';

import NextButton from '../components/NextButton';

function LineByLinePage() {
  const [englishSentecesArray, setEnglishSentecesArray] = useState<string[]>(
    []
  );
  const [portugueseSentecesArray, setPortuguseSentecesArray] = useState<
    string[]
  >([]);
  const [joinedSetencesArray, setJoinedSetencesArray] = useState<string[][]>();

  const { textEnglish, textPortuguese } = useVideoContext();

  useEffect(() => {
    const englishSetences = textEnglish && getOnlySetences(textEnglish);
    const portugueseSetences =
      textPortuguese && getOnlySetences(textPortuguese);

    englishSetences && setEnglishSentecesArray(englishSetences);
    portugueseSetences && setPortuguseSentecesArray(portugueseSetences);

    joinSentences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textEnglish, textPortuguese]);

  function getOnlySetences(text: string): Array<string> {
    const setences = sbd.sentences(String(text));

    return setences;
  }

  function joinSentences() {
    const setencesLength = englishSentecesArray?.length;

    const setencesArray = [];

    for (let index = 0; index < setencesLength; index++) {
      setencesArray[index] = [
        englishSentecesArray[index],
        portugueseSentecesArray[index],
      ];
    }

    console.log({
      setencesArray,
      englishSentecesArray,
      portugueseSentecesArray,
    });

    setJoinedSetencesArray(setencesArray);
  }

  return (
    <div id="line-by-line-page">
      <h1>Text Line By Line</h1>

      <div className="texts-container">
        {joinedSetencesArray?.map((setences, index) => {
          return (
            <div className="setence-block" key={index}>
              <p key={index} className="english-setence">
                {setences[0]}
              </p>
              <p>{setences[1]}</p>
            </div>
          );
        })}
        <div className="buttons-container">
          <button
            onClick={() => {
              const englishSetences =
                textEnglish && getOnlySetences(textEnglish);
              const portugueseSetences =
                textPortuguese && getOnlySetences(textPortuguese);

              englishSetences && setEnglishSentecesArray(englishSetences);
              portugueseSetences &&
                setPortuguseSentecesArray(portugueseSetences);

              joinSentences();
            }}
          >
            Refresh
          </button>
          <NextButton to="listen-with-text" />
        </div>
      </div>
    </div>
  );
}

export default LineByLinePage;
