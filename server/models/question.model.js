const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const questionSchema = mongoose.Schema ({
    question: {
        type: String,
        required: true,
        unique: true
    },
    expiresAt: Date,
    hint: String,
    
    rightAnswer: {
        type: String,
        required: true
    },
    expired: {
        type: Boolean,
        default: false,
    },
    answerImg: {
        type: Buffer
    }
},{
    timestamps: true
})

questionSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'question'
})


const Question = mongoose.model('Question', questionSchema)
module.exports = Question