const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: String,
    birthday: String,
    loves: [{
        type:String
    }],
    likes: [{
        type:String
    }],
    neutral: [{
        type:String
    }],
    dislikes: [{
        type:String
    }],
    hates: [{
        type:String
    }],
});

module.exports = mongoose.model('Character', CharacterSchema);