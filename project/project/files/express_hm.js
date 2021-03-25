const express = require('express')
const bodyParser = require('body-parser')

const app = new express()
app.use(bodyParser.json())
//app.use(cheak)
// app.set('view engine', 'ejs')

// app.get('/:oshra', (req, res) => {
//     console.log(req.params.oshra)
//     res.status(200).send('hiii')
//     console.log('server is up!!!!')
// })
function cheak(req, res, next) {
    if (req.query.name)
        return next()
    else
        res.status(400).send('error no name')
}

app.get('/funkmid', (req, res) => {
    const uname = req.query.name
    console.log(uname)
    // res.status(200).send(uname)
    // res.status(200).json({ massage: "hello world", user: uname })

    res.status(200).json({ massage: "succses", name1:uname })
})

const arr = [{ id: 0, name: "dfgd" }, { id: 1, name: "fdffdsvcxv" }, { id: 2, name: "dhhhd" }]
app.post('/getUser/:name', (req, res) => {
    const name = req.params.name
    console.log(arr.filter(x => x.name != name))
    res.status(200).send(req.body)
})
app.listen(3000, () => {
    console.log('listening on')
})
//שימוש ברנדר- שליחה לדף האי גי אס שבוויוז
app.get('/', (req, res) => {
    //console.log(req.params.oshra)
    // res.status(200).send('hiii')
    res.redirect('https://www.google.com/search?q=%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA&rlz=1C1GGRV_enIL807IL807&oq=%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA&aqs=chrome..69i57.2589j0j7&sourceid=chrome&ie=UTF-8')
    //res.render('main', { name: req.params.oshra })
    console.log('server is up!!!!')
})

app.get('/mami/:oshra', (req, res) => {
    console.log(req.params.oshra)
    let name = req.params.name
    let person = {
        age: 5,
        password: 9
    }
    res.render('main', { username: name, user: person })
    console.log('server is up!!!!')

})

// app.get('/fruit', (req, res) => {
//     let arrFruite = [{ name='apple', color: 'red' }, { name='bannana', color: 'yellow' }]
//     res.render('main', { arr: arrFruite, massage: 'ourFruite' })
// })