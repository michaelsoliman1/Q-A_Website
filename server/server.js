#!/usr/bin/env node
require('dotenv').config()

const express = require('express')
const cors = require("cors")
require('./db/mongoose.js')
const userRouter = require('./routers/user.router')
const questionRouter = require('./routers/question.router')
const answerRouter = require('./routers/answer.router')


const port = process.env.SERVER_PORT || 5000
const app = express()
app.use(express.json())



app.use(cors())
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");  
    next()
})

app.use(userRouter) 
app.use(questionRouter)
app.use(answerRouter)



app.listen(port,()=>{
    console.log("server is up on port: " + port)
})


/* const Answer = require('./models/answer.model')
const User = require('./models/user.model')
const Question = require('./models/question.model') */



//const main = async () => {
/*     const answer = await Answer.findById('5efe1bc617dd8b1506abee82')
    await answer.populate('owner').execPopulate()
    console.log(answer.owner) */

/*     const user = await User.findById('5efe1bb117dd8b1506abee7f')
    await user.populate('answers').execPopulate()
    console.log(user.answers) */

    /* const answer = await Answer.findById('5efed87ddfbefd41c40e6885')
    await answer.populate('question').execPopulate()
    console.log(answer.question) */

    /* const question = await Question.findById('5efe1fdd89cb8f168641db9d')
    await question.populate('answers').execPopulate()
    console.log(question.answers) */
 
//}
//main()