import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import reducer from './reducers'

// https://github.com/zalmoxisus/redux-devtools-extension#usage redux 工具使用  12.19
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
  const store = createStore(reducer, enhancer);
// http://blog.csdn.net/u010977147/article/details/53519183  中间件  


// const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

 registerServiceWorker(); 
  // 主要是用于在生产环境中为用户在本地创建
  // 一个service worker 来缓存资源到本地，提升应用的访问速度
