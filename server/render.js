import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import Html from './Html'
import App from '../src/App'

const sheet = new ServerStyleSheet()

const initialData = {
    name: 'The world'
}

function render(req, res) {
  renderToNodeStream(
    <Html initialData={JSON.stringify(initialData)}>
      <StyleSheetManager sheet={sheet.instance}>
        <App {...initialData} isServer={!!req} />
      </StyleSheetManager>
    </Html>
  ).pipe(res)
}

export default render
