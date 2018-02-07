import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const initialData = {
    name: 'World'
}

ReactDOM.render(
  <App {...initialData} />,
  document.getElementById('root')
)
