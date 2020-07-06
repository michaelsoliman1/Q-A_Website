const User = require('../models/user.model')
const Answer = require('../models/answer.model')



exports.submitAnswer = async (req,res) => {
    console.log(req)
    let denied = false
    const user = req.user
    try {
        if (!user){
            throw new Error()     
        }
        const answers = await Answer.find({owner: user._id}) 
        answers.forEach((answer) => {
            if(answer.question == req.body.question)
            {
                denied = true
            }
        })
        if(denied){
            return res.status(400).send({
                message: "you already answered this question"
            })
        }
       
        const newAnswer = new Answer({
            ...req.body,
            owner: req.user._id,
        })

        await newAnswer.save()

        res.send({
            answer: newAnswer
        })   

    }catch(e){
        res.status(400).send({
            message : e.message
        })    
    }
}


exports.updateAnswer = async (req,res) => {
    const update = Object.keys(req.body)

    if (update != 'answer') {
        return res.status(403).send({ error: 'Invalid update!' })
    }

    const _id = req.params.id

    try {
        const answer = await Answer.findById(_id )
        answer[update] = req.body[update]
        await answer.save()
        res.send(answer)
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.deleteAnswer = async (req,res) => {

}