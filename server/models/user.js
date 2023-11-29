const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
        trim: true   
    },
    email:{
        type: String,
        required: true,
        unique: false,
        trim: true 

    },
    isTech:{
        type: Boolean,
        required: true,
        unique: false,
    },
    issues: [issueSchema]

})

const user = model('user', userSchema)

module.exports = user;