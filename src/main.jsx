import TypingProvider from './components/Context/TypingContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <TypingProvider>
    <App />
  </TypingProvider>,
)
