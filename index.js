const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectdb = require('./config/db')

const app = express()

//dot env config
dotenv.config()

//db
connectdb()

//middleware

// end point
app.get('/', (req, res) => res.send('hello'))
// port
const PORT = process.env.PORT
//server
app.listen(PORT, () => {
    console.log(`server start in port no ${PORT}`.bgGreen);
})