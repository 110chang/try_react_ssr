import React from 'react'
import { renderToNodeStream } from 'react-dom/server'

import Html from './Html'
import App from '../src/App'

const initialData = {
    name: 'World'
}

const renderedStream = renderToNodeStream(
  <Html initialData={JSON.stringify(initialData)}>
    <App {...initialData} />
  </Html>
)

export default function render(req, res) {
  renderToNodeStream(
    <Html initialData={JSON.stringify(initialData)}>
      <App {...initialData} />
    </Html>
  ).pipe(res)
}
