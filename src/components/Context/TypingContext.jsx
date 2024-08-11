import React from 'react'
import {randomText} from "../../constants/text.data";

export const TypingContext = React.createContext();

const TypingProvider = ({children}) => {
  const [text, setText] = React.useState(randomText);
  const [userInput, setUserInput] = React.useState("");
  const [startTime, setStartTime] = React.useState(null);
  const [errors, setErrors] = React.useState(0);
  const [isEnd, setIsEnd] = React.useState(false);

  return (
    <TypingContext.Provider value={{
      text, setText, userInput, setUserInput, startTime, setStartTime, errors, setErrors, isEnd, setIsEnd
    }}>
      {children}
    </TypingContext.Provider>
  )
}

export default TypingProvider