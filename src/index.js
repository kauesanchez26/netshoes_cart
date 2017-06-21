import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

async function init() {
  const store = await configureStore()
  ReactDOM.render(
    React.createElement(Root, {store}), document.getElementById('root')
  )
}

init()
registerServiceWorker()
