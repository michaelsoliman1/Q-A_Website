const User = require('../models/user.model')
const Answer = require('../models/answer.model')
const Question = require('../models/question.model')
const { set } = require('mongoose')


exports.login = (async(req,res) =>{
    try{
        const user = await User.findByCredentials(req.body.userName,req.body.password)
        const token = await user.genAuthToken()
        res.send({
            message:"login successfully",
            userId :user._id,
            token
        })
    }catch(e){
        res.status(400).send(e)
    }
})

exports.signup = async (req ,res ) => {
    const user = new User(req.body)
    try{
        await user.save()
        token = await user.genAuthToken()
        res.status(201).send({
            user,
            token
        })
    }catch(e){
        console.log(e)
        console.log(e.message)
        res.status(400).send({
            message : e.message
        })
    }
}

exports.logout =  async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send({
            message: "logout succesfully"
        })
    } catch (e) {
        res.status(500).send()
    }
}


exports.myAnswers = async (req,res) => {
    try {

        const answers = await Answer.find({owner: req.user._id})    

        if (answers.length == 0){
            return res.status(404).send({
                message: "you dont have any answers"
            })
        } 

        let popAnswers = []
        await Promise.all(answers.map(async answer => {
            let question0 =  await Question.findById({_id : answer.question})
            let newA = {
                answer_id : answer._id,
                question_id : question0._id,
                answer : answer.answer,
                question: question0.question
            } 
            popAnswers.push(newA)
        }))
        
        res.send({
            answers : popAnswers
        })

    }catch(e){
        res.status(400).send({
            message : e.message
        })    
    }
    
}
