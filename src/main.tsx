import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'twin.macro'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
