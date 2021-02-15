import * as React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Home from './pages/Home'


if (module.hot) {
  module.hot.accept()
}

render(
  <Router>
    <Home path="/" />

  
  </Router>,
  document.getElementById('root')
)