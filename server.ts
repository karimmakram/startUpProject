import express from 'express'
import 'dotenv/config'
import connectDb from './Infastructure/db/db'
const app = express()
app.use(express.json())
connectDb()
app.get('/', (req, res) => {
  res.send('Hello')
})
app.listen(process.env.Port, () => {
  console.log('App running in port : ', process.env.Port)
})
