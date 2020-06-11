#!/usr/bin/env node

const express = require('express')
const cors = require("cors")
require('./db/mongoose.js')
const userRouter = require('./routers/user')


const port = 5000
/* console.log(process)
 */const app = express()
app.use(express.json())
app.use(cors())
app.use(userRouter)


app.listen(port,()=>{
    console.log("server is up on port: " +port)
})
