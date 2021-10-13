const jwt = require('jsonwebtoken')//זה מה שצריך להוסיף
const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv')

const app = new express()
app.use(bodyParser.json())
env.config()

// const mongoose=require('mongoose')

// const connectionParams={
//     useNewUrlParser:true,
//     usecreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
// }
// mongoose.connect(process.env.DB_CONNECT,connectionParams).then(()=>{
//     console.log('connected')
// }).catch(err=>{console.log(err)});



app.get('/', (req, res) => {
    console.log('hiiii')
    res.redirect('https://drive.google.com/drive/shared-with-me')
})
//let secert = '134vccgf7'
//const secert=process.env.SECRET_JWT
app.post('/login_gwt', (req, res) => {
    console.log(req.body)
    console.log(process.env.SECRET_JWT + "shlom")
    const token = jwt.sign({ name: req.body.name, password: req.body.password }, process.env.SECRET_JWT)
    console.log(token)

    const token1 = jwt.verify(req.headers['authorization'], process.env.SECRET_JWT)
    console.log(token1)

    res.status(200).json({ massge: 'createtoken', token: token1 })
})


//לחלץ את התוקן
// const token = jwt.verify(token, secert)

//(מעביר את הנתונים של הרספונס לכתובת)לשלוח את הריספונס לכתובת 
//res.redirect('http://ejs.com')






app.listen(3000, () => {
    console.log('listening on')
})