import path from 'path'
import express from 'express'

import renderedStream from './render'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/', (req, res) => {
  renderedStream.pipe(res);
})

app.listen(3000)
