import path from 'path'
import express from 'express'

import render from './render'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/', render)

app.listen(3000)
