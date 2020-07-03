const User_controller = require('../controllers/user.controller') 
const express = require('express')
const router = new express.Router()
const auth = require("../middleware/auth")


router.post('/user/login', User_controller.login)

router.post('/user/signup', User_controller.signup)

router.post('/user/logout', auth, User_controller.logout)

router.get('/user/myAnswers', auth, User_controller.myAnswers)

module.exports = router