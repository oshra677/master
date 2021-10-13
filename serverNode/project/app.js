const jwt = require('jsonwebtoken')//זה מה שצריך להוסיף
const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv')
const mongoose = require('mongoose')
const router = require('./routes/api')

const app = new express()

const cors = require('cors');
app.use(cors())
app.all('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    res.header('Access-Control-Allow-Methods', "*")

    next();
})
app.use(bodyParser.json())
app.use('/', router)
env.config()



const connectionParams = {
    useNewUrlParser: true,
    usecreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('connected')
}).catch(err => { console.log(err) });



app.listen(4200, () => {
    console.log('listening on')
})