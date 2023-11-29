const { Schema, model } = require('mongoose');
const issueSchema = require('./issues')

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
    issues: [
        {
            type: Schema.Types.ObjectId,
            ref: "issues",
          },
    
    ]


   

})

const User = model('user', userSchema)

module.exports = User;