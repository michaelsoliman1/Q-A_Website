const User = require('../models/user.model')
const Answer = require('../models/answer.model')


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
        await req.user.populate('answers').execPopulate()
        res.send(req.user.answers)

        /* const answers = await Answer.find({owner: req.user._id})
        answers.forEach(async answer => {
            await answer.populate('question').execPopulate()

        });

        if (answers.length == 0){
            return res.status(404).send({
                message: "you dont have any answers"
            })
        } 
        res.send({
            answers
        }) */
    }catch(e){
        res.status(400).send({
            message : e.message
        })    
    }
    
}
