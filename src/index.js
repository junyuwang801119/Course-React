import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App' // 改檔名即可導入不同檔案
import * as serviceWorker from './serviceWorker'
// 第一步：匯入createStore, combineReducers API
import { createStore, applyMiddleware, compose } from 'redux'
// 導入redux-thunk中介軟體
import thunk from 'redux-thunk'
// 匯入綁定react與redux用的最上層元件
import { Provider } from 'react-redux'

// 第二步：寫出reducer
// action = { type: 'ADD_VALUE', value: 1 }
// action = { type: 'MINUS_VALUE', value: 1 }

import { rootReducer } from './reducers'
// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value
//     case 'MINUS_VALUE':
//       return state - action.value
//     default:
//       return state
//   }
// }

// 第二之一：合併所有的reducers成一個大的reducer
// const rootReducer = combineReducers({
//   counter,
// })

// 第三步：由rootReducer建立store, REDUX_DEVTOOLS瀏覽器開發工具,正式上線需拿掉
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// 在建立store時要加入中介軟體
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
