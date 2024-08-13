import React from 'react';
import styles from './TextDisplay.module.css';
import classNames from 'classnames/bind';
import { TypingContext } from '../Context/TypingContext';

const cx = classNames.bind(styles);

const TextDisplay = () => {

  const {text, userInput} = React.useContext(TypingContext);

  const renderText = () => {
    let globalIndex = 0;
  
    return text.map((word, idx) => {
      return (
        <div className={styles.word} key={idx}>
          {word.split("").map((char, index) => {
            const isError = char !== userInput[globalIndex];
            const isInput = globalIndex === userInput.length;
  
            globalIndex++; 
  
            return (
              <span
                className={cx(styles.normal, {
                  error: isError && globalIndex <= userInput.length, 
                  success: !isError && globalIndex <= userInput.length,
                  input: isInput
                })}
                key={index}
              >
                {char}
              </span>
            );
          })}
        </div>
      );
    });
  };
  

  return (
    <div className={styles.block}>{renderText()}</div>
  )
}

export default React.memo(TextDisplay);