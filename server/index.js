import path from 'path'
import express from 'express'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'

import Html from './Html'
import App from '../src/App'

const app = express()

const initialData = {
    name: 'World'
}

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/', (req, res) => {
  renderToNodeStream(
    <Html initialData={JSON.stringify(initialData)}>
      <App {...initialData} />
    </Html>
  ).pipe(res);
})

app.listen(3000)
