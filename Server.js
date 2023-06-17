// Express server to handle HTTP requests for the ToDo app

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/ToDoRouter')
require('dotenv').config()

const app = express()
const PORT = process.env.port || 4000

app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDb...`))
    .catch((err) => console.log(err))
app.use(routes)
// Start the server
app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
