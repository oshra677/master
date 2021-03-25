
const jwt = require('jsonwebtoken')//זה מה שצריך להוסיף
const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv')

const app = new express()
app.use(bodyParser.json())
env.config()
const mongoose = require('mongoose')

const connectionParams = {
    useNewUrlParser: true,
    usecreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('connected')
}).catch(err => { console.log(err) });



app.listen(3000, () => {
    console.log('listening on')
})