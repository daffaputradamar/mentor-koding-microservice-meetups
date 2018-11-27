const express = require('express')
const cors = require('cors')
require('./config/db')
const meetupRouter = require('./routers/meetup')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/meetup', meetupRouter)

app.listen(process.env.PORT || 5000, () => console.log('Service meetup is listening'))
