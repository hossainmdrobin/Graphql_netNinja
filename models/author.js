const {Schema, model} = require('mongoose')

const authorSchema = new Schema({
    name: String,
    genre: String,
    age: String
});

module.exports = model("Author", authorSchema);