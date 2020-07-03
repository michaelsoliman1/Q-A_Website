const Question = require('../models/question.model')

exports.getQuestions = async (req ,res ) => {
    try{
        const questions = await Question.find()
        if(!questions){
            res.send({
                message: "no questions"
            })
        }
        res.send({
            questions
        })
    }catch(e){
        console.log(e)
        console.log(e.message)
        res.status(400).send({
            message : e.message
        })
    }
}

exports.getQuestionById = async (req ,res ) => {
    try{
        const question = await Question.findById({_id: req.params._id})
        if(!question){
            res.send({
                message: "no matching questions"
            })
        }
        res.send({
            question    
        })
    }catch(e){
        console.log(e)
        console.log(e.message)
        res.status(400).send({
            message : e.message
        })
    }
}

exports.addQuestion = async (req ,res ) => {
    const q = new Question(req.body)
    try{
        await q.save()
        res.status(201).send({
            q
        })
    }catch(e){
        console.log(e)
        console.log(e.message)
        res.status(400).send({
            message : e.message
        })
    }
}
