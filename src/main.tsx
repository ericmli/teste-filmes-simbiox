import { createRoot } from 'react-dom/client'
import ThemeProvider from './theme/index.tsx'
import { App } from './rotes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
