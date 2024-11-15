import React, { useEffect, useState } from 'react';

function Text() {
  const [letterCount, setLetterCount] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [visible, setVisible] = useState(true);
  const [currentWord, setCurrentWord] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const words = ['Hello World.', 'Life is a test.', 'Just do it.'];
  const colors = ['WhiteSmoke', 'WhiteSmoke', 'WhiteSmoke'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (waiting === false) {
        if (letterCount === 0) {
          setWaiting(true);
          setTimeout(() => {
            setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
            setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
            setX(1);
            setLetterCount((prevCount) => prevCount + 1);
            setWaiting(false);
          }, 1000);
        } else if (letterCount === words[wordIndex].length + 1) {
          setWaiting(true);
          setTimeout(() => {
            setX(-1);
            setLetterCount((prevCount) => prevCount + x);
            setWaiting(false);
          }, 1000);
        } else {
          setCurrentWord(words[wordIndex].substring(0, letterCount));
          setLetterCount((prevCount) => prevCount + x);
        }
      }
    }, 120);

    const underscoreIntervalId = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(intervalId);
      clearInterval(underscoreIntervalId);
    };
  }, [letterCount, wordIndex, x, waiting, colors, words]);

  return (
    <>
      <div className='console-container'>
        <span id='text' style={{ color: colors[colorIndex] }}>{currentWord}</span>
        <div className={`console-underscore ${visible ? '' : 'hidden'}`}>&#95;</div>
      </div>
    </>
  );
}

export default Text;
