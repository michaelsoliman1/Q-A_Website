const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const answerSchema = mongoose.Schema ({
    answer: {
        type: String,
        required: true,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Question',
        //required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        //required: true
    }
},{
    timestamps: true,
})

const Answwer = mongoose.model('Answer', answerSchema)
module.exports = Answwer