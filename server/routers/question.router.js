const Question_controller = require('../controllers/question.controller') 
const express = require('express')
const router = new express.Router()
const auth = require("../middleware/auth")


router.get('/questions',auth, Question_controller.getQuestions)

router.get('/questions/activeQuestion', auth, Question_controller.getActiveQuestion)

router.get('/questions/:_id',auth, Question_controller.getQuestionById)

router.post('/questions/addQuestion', Question_controller.addQuestion)


module.exports = router