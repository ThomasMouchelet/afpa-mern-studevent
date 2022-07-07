const express = require('express')
const app = express()
const cors = require('cors')
const eventsRoutes = require('./routes/events.routes')
const usersRoutes = require('./routes/users.routes')
const databaseConnectionMongo = require('./config/database-mongodb')

databaseConnectionMongo()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use("/api", eventsRoutes)
app.use("/api", usersRoutes)

app.listen(8000, () => {
    console.log('Running app express on port : 8000')
})