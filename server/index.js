import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import Html from './Html'
import App from '../src/App'

const app = express()

const initialData = {
    name: 'World'
}

app.get('/', (req, res) => {
    // ReactDOMServer.renderToNodeStream(
    //     <Html initialData={JSON.stringify(initialData)}>
    //         <App {...initialData} />
    //     </Html>
    // ).pipe(res)
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <div id="root"></div>
        <h1>Hello!</h1>
      </body>
      </html>
    `);
})

app.listen(3000)
