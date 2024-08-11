import React from 'react';
import styles from './TextDisplay.module.css';
import classNames from 'classnames/bind';
import { TypingContext } from '../Context/TypingContext';

const cx = classNames.bind(styles);

const TextDisplay = () => {

  const {text, userInput} = React.useContext(TypingContext);

  const renderText = () => {
    return text.split("").map((char, idx) => {
      
      const isError = char !== userInput[idx];

      return (
        
        <span className={
          cx(styles.normal, 
          {
            error: isError && idx < userInput.length, 
            success: !isError && idx < userInput.length,
            input: idx === userInput.length
          })
        } key={idx}>{char}</span>
      )
    })
  }

  return (
    <div className={styles.block}>{renderText()}</div>
  )
}

export default React.memo(TextDisplay);