const express = require('express')
const User = require('../models/users')
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const bcrypt = require('bcrypt')
const router = new express.Router()

router.post('/users/login',async(req,res) =>{
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

router.post('/users/signup',async (req ,res ) => {
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
})

module.exports = router