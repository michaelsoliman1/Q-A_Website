#!/usr/bin/env node
require('dotenv').config()

const express = require('express')
const cors = require("cors")
require('./db/mongoose.js')
const userRouter = require('./routers/user.router')

const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())
app.use(userRouter)


app.listen(port,()=>{
    console.log("server is up on port: " + port)
})
