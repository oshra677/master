const bodyParser = require('body-parser')


const express = require('express')
const app1 = express();
app1.use(bodyParser.json())

app1.get('/hello/:name', (req, res) => {
    const name = req.params.name
    console.log(name)
    res.status(200).json({ massage: "hello world", user: name })
    console.log('server is up!!!!')
})
app1.get('/class/', (req, res) => {
    const name = req.query.name
    console.log(name)
    res.status(200).json({ massage: "hello world", user: name })
    console.log('server is up!!!!')
})

app1.get('/', function (req, res) {
    console.log('server is up!!!!')
    // res.send('helo')
    res.status(200).json({ name: "fdgdfg", family: "sddd" })
})


// app1.get('/hello', () => {
//     console.log("hello world!!!!!!!!!!!")
// })

app1.get('/a', function (req, res) {
    console.log('server is up!!')
    res.status(200).send('helo a')
})

app1.post('/createUser', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

let arr = [
    { name: "yael", age: "45" },
    { name: "shifi", age: "90" }
]
app1.delete('/deleteUser/:Uname', (req, res) => {
    console.log(arr)
    const newArr = arr.filter(x => x.name != req.params.Uname)
    res.status(200).send(newArr)
})
app1.put('/updateUser/:name', (req, res) => {

})
app1.listen(3000, () => {
    console.log('listening on')
})