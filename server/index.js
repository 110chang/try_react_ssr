import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Html from './Html'
import App from '../src/App'

const app = express()

const initialData = {
    name: 'The world'
}

const renderFullPage = (renderedContent) => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${renderedContent}</div>
    <script src="bundle.js"></script>
  </body>
  </html>
`)

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/', (req, res) => {
  const renderedPage = renderFullPage(renderToString(<App {...initialData} />))
  res.status(200).send(renderedPage);
})

app.listen(3000)
