const express = require('express')
const cors = require('cors')
require('./config/db')
const meetupRouter = require('./routers/meetup')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/meetup', meetupRouter)

app.listen(4000, () => console.log('Service meetup is listening'))
