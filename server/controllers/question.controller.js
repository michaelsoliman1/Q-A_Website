const Question = require('../models/question.model')

exports.getQuestions = async (req ,res ) => {
    try{
        const questions = await Question.find()
        if(!questions){
            return res.status(404).send({
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
//get a question by id with all its' answers 
exports.getQuestionById = async (req ,res ) => {
    try{
        const question = await Question.findById({_id: req.params._id})
        if(!question){
            return res.status(404).send({
                message: "no matching questions"
            })
        }
        await question.populate('answers').execPopulate()
        res.send({
            question,    
            //answers: question.answers
        })
    }catch(e){
        res.status(400).send({
            message : e.message
        })
    }
}

exports.getActiveQuestion = async (req, res) => {
    const question = await Question.findOne({expired : false})
    try {
        if(!question){
            return res.status(404).send()
        }
    
        res.send({question})
    }catch(e) {
        res.status(400).send({
            message: e.message
        })
    }
    

}

exports.addQuestion = async (req ,res ) => {
    const question = new Question(req.body)
    try{
        await question.save()
        res.status(201).send({
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
