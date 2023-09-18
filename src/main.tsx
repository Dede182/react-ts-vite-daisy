import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { I18nextProvider } from 'react-i18next'
import i18n from './services/i18n.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>

      <BrowserRouter>
          <Provider store={store}>
            {/* <FloatSetting /> */}
            <App />
          </Provider>
        </BrowserRouter>
      </I18nextProvider>

  </React.StrictMode>,
)
