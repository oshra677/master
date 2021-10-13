const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/api')


const app = new express()

app.use(bodyParser.json())
app.use('/', router)

//app.use(cheak)
app.use(admin_user)
function cheak(req, res, next) {
    if (req.query.name)
        return next()
    else
        res.status(400).send('error no name')
}

app.get('/funkmid', (req, res) => {
    const uname = req.query.name
    console.log(uname)
    res.status(200).json({ massage: "succses", name1: uname })
})
//פונקצית מידלוור הבודקת לםי היו אר אל אם מגובר באדמין או יוסר אם אדמין שולחת סקרט
let code = '123545'
function admin_user(req, res, next) {
    if (req.originalUrl.includes('admin')) {
        console.log('your admin')
        req.code = code
    }
    return next()
}
app.get('/user', (req, res) => {
    console.log("hello user")
    res.status(200).json({ massage: "hello user", code: req.query.code })

})

app.get('/admin', (req, res) => {
    console.log("hello admin")
    res.status(200).json({ massage: "hello admin", code: req.code })

})


/////////////////////////server/////////////////////
// const router = require('./routes/api')
// app.use('/', router)


app.listen(3000, () => {
    console.log('listening on')
})