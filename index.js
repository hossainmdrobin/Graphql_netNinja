const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4000;
const url = process.env.URL

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

mongoose.connect(url,()=>console.log('connected to',url))

app.listen(PORT, ()=> console.log('Listening to the server on:', PORT));

