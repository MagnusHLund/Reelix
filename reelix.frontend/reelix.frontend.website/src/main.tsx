import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { StrictMode } from 'react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SkeletonTheme baseColor='#123123' highlightColor='#456789'>
          <App />
        </SkeletonTheme>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
