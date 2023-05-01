import React, { useEffect, useState } from 'react';
import styles from './FallingLetters.module.css';

const FallingLetters = ({ text }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const lineArray = text.split('|').map((line, lineIndex) => {
      const letters = line.split('').map((letter, index) => {
        return (
          <span key={index} className={`${styles.letter} ${styles['letter-' + index]}`}>
            {letter}
          </span>
        );
      });

      return (
        <div key={lineIndex} className={styles.line}>
          {letters}
        </div>
      );
    });
    setLines(lineArray);
  }, [text]);

  return <div className={styles['falling-letters']}>{lines}</div>;
};

export default FallingLetters;
