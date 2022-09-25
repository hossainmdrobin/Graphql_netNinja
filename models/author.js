const {Schema, model} = require('mongoose')

const authorSchema = new Schema({
    name: String,
    genre: String,
    author: String
});

module.exports = model("Author", authorSchema);