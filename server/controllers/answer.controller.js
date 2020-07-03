const User = require('../models/user.model')
const Answer = require('../models/answer.model')



exports.submitAnswer = async (req,res) => {
    try {
        const user = req.user
        if (!user){
            throw new Error()     
        }
        const answers = await Answer.find({owner: user._id}) 
        console.log(answers)
        //error here! must fix
        answers.forEach((answer) => {
            if(answer.question == req.body.question)
            {
                return res.status(403).send({
                    message: "you already answered this question"
                })
            }
        })
        const newAnswer = new Answer({
            ...req.body,
            owner: req.user._id,
        })

        await newAnswer.save()

        res.send({
            newAnswer
        })   

    }catch(e){
        res.status(400).send({
            message : e.message
        })    
    }
}
/*
exports.myAnswerss = async (req,res) => {
    try {
         await req.user.populate('answers').execPopulate()
        await req.user.answers.populate('question').execPopulate()
        console.log(req.user.answers.question)
        res.send(req.user.answers) 

        const answers = await Answer.find({owner: req.user._id}).populate('question').execPopulate()
        /* answers.forEach(async answer => {
            await answer.populate('question').execPopulate()

        }); 

        if (answers.length == 0){
            return res.status(404).send({
                message: "you dont have any answers"
            })
        } 
        res.send({
            answers
        })
    }catch(e){
        res.status(400).send({
            message : e.message
        })    
    }
    
}
*/