import { createRoot } from 'react-dom/client'
import ThemeProvider from './theme/index.tsx'
import { App } from './rotes/index.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
)
