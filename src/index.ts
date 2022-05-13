import { MongoConnection } from './database/MongoConnection'
import express from 'express'
import { URLController } from './controller/URLController'

const app = express()
app.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(5555, () => { console.log('Connected at port 5555') })