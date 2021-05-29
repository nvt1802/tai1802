import React from 'react'
import ReactDOM from 'react-dom'
import Server from 'server'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from "redux-saga"
import rootReducers from 'redux/reducers'
import { rootSaga } from "redux/sagas"
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import 'translations'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, compose(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Server />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
