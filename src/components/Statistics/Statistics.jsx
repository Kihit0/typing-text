import React from 'react'
import styles from './Statistics.module.css'
import { TypingContext } from '../Context/TypingContext'
import { words } from '../../constants/text.data';

const Statistics = () => {
  const { userInput, startTime, errors, setErrors, setIsEnd, setStartTime, setUserInput, setText} = React.useContext(TypingContext);

  const getWpm = () => {
    const elapsedTime = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = userInput.trim().split(" ").length;
    return Math.round(wordsTyped / elapsedTime);
  }

  const handleRestart = () => {
    setErrors(0);
    setStartTime(null);
    setIsEnd(false);
    setUserInput("");
    setText(words);
  }

  return (
    <div className={styles.modal}>
      <h3>Ваш результат: </h3>
      <div className={styles.modal__statistics}>
        <p>WPM: <span className={styles.modal__number}>{getWpm()}</span></p>
        <p>Errors: <span className={styles.modal__number}>{errors}</span></p>
      </div>

      <div>
        <button className={styles.modal__btn} onClick={handleRestart}>Попробовать снова</button>
      </div>
    </div>
  )
}

export default Statistics