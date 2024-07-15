import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Main } from './main'

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <Main />
    </StrictMode>,
  )
