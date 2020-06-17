const User_controller = require('../controllers/user.controller') 
const express = require('express')
const router = new express.Router()
const auth = require("../middleware/auth")


router.post('/users/login', User_controller.login)

router.post('/users/signup', User_controller.signup)

router.post('/users/logout', auth, User_controller.logout)

module.exports = router