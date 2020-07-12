const Question_controller = require('../controllers/question.controller') 
const express = require('express')
const router = new express.Router()
const {auth, adminAuth} = require("../middleware/auth")


router.get('/questions',auth, Question_controller.getQuestions)

router.get('/questions/:_id',auth, Question_controller.getQuestionById)

router.post('/questions/addQuestion',adminAuth, Question_controller.addQuestion) // for admin users only

//router.get('/questions/deactivateQuestion', auth, Question_controller.deactivateQuestion)



module.exports = router