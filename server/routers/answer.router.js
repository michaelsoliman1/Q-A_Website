const Answer_controller = require('../controllers/answer.controller') 
const express = require('express')
const router = new express.Router()
const auth = require("../middleware/auth")


router.post('/submitAnswer', auth, Answer_controller.submitAnswer)


module.exports = router