const { Schema, model } = require('mongoose');

const issueSchema = new Schema({
    issues: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    resolved: {
        type: Boolean,
        required: true,
        unique: false,
        trim: true
    },
    
})

const Issues = model('issues', issueSchema)

module.exports = Issues;