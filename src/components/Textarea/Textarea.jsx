import React from 'react';
import { TypingContext } from '../Context/TypingContext';
import styles from "./Textarea.module.css"

const Textarea = () => {

  const {
    userInput, 
    setUserInput, 
    startTime, 
    setStartTime, 
    text, 
    errors, 
    setErrors, 
    isEnd,
    setIsEnd } = React.useContext(TypingContext);

  const textareaRef = React.useRef(null);

  const handleChange = (e) => {
    const input = e.target.value;

    if(!startTime) setStartTime(new Date());

    if(input.length > text.length){ 
      setIsEnd(true);
      return;
    }

    setUserInput(input);

    const errorsCount = input.split('').reduce((acc, char, index) => {
      return acc + (char !== text[index] ? 1 : 0);
    }, 0)

    errors <= errorsCount && setErrors(errorsCount);
  }

  React.useEffect(() => {
    const handleKeyDown = () => {
      if(document.activeElement !== textareaRef.current) {
          textareaRef.current.focus();
      }
    }

    !isEnd && document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <textarea
      className={styles.textarea}
      onChange={handleChange} 
      value={userInput}
      ref={textareaRef}
      />
  )
}

export default React.memo(Textarea);