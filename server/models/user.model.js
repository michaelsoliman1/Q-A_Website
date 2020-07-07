const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema ({
    userName: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error("the password shouldn't include password term")
        }
    },
    points: {
        type: Number,
        defualt: 0
    },
    image:{
        // empty for now
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

userSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.genAuthToken = async function(){
    const user = this 
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
   
}

userSchema.methods.toJSON = function () {
    const user = this.toObject()
    delete user.password
    delete user.tokens
    delete user.following
    return user
}
userSchema.statics.findByCredentials = async(userName, password) =>{
    const user = await User.findOne({userName})

    if(!user){
        throw new Error("unable to login")
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("unable to login")
    }
    return user
}

userSchema.pre('save', async function (next) {
    const user = this
    if(this.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)

    }
    next()
})
const User = mongoose.model('User',userSchema)
module.exports = User
