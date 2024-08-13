import React from 'react'
import TextDisplay from './components/TextDisplay/TextDisplay'
import { TypingContext } from './components/Context/TypingContext'
import Textarea from './components/Textarea/Textarea'
import Statistics from './components/Statistics/Statistics'
import styles from "./App.module.css";
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const App = () => {
  const { isEnd } = React.useContext(TypingContext);

  return (
    <div>
      <div className={cx(styles.app, styles.container)}>
        <h1 className={styles.app__title}>Тренировка скорости печати</h1>
        <label className={styles.app__label}>
          <TextDisplay />
          <Textarea />
        </label>
        <div className={styles.app__modal}>
          {isEnd && <Statistics /> }
        </div>
      </div>
    </div>
  )
}

export default App
