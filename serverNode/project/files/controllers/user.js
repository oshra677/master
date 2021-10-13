//const user = require('../models/user')
const User = require('../models/user')
const createUser = (req, res) => {
    // const createUser = async (req, res) => {
    console.log('cerateuser!')
    // const newUser=new User({
    //     name:"dasd",
    //     password:"343",

    // })
    //const newUser=new  User(req.body)
    const newUser = new User(req.body)
    newUser.name = req.params.name

    //1
    // newUser.save().then(()=>{
    //     console.log('user created sucsses')
    //     res.status(200).json({
    //         massege:'user created',newUser:user
    //     }).catch(err=>{
    //         console.log('err')
    //         res.status(400).send(err)
    //     })
    // })
    //2
    newUser.save().then((err, user) => {
        if (err)
            res.status(400).send(err)
        else {
            console.log('usercreated succesfuly')
            res.status(200).send.json({
                massege: 'user created', newUser: newUser
            })

        }
    })
    //3
    // const user = await newUser.save()
    // try {
    //     res.status(200).send.json({
    //         massege: 'user created', newUser: user
    //     })
    // }
    // catch (err) {
    //     res.status(400).send(err)
    // }
    console.log('cerateuser!!!!!!!!!!!!!')
    console.log(newUser)

}

const getUser = async (req, res) => {
    try {
        console.log("getUser!!")
        const user = await User.findById(req.params.id)
        if (user) {
            console.log(user)
            res.status(200).json({
                massege: "user sucsess",
                user: user
            })
        }
        else
            res.status(200).send("no user")
    }
    catch (err) {
        res.status(400).send(err.massege)
    }
}

const getUserById = (req, res) => {
    console.log('getuserbyid')
    user.findOne({ name: req.params.name })
}

const updateUser = async (req, res) => {
    try {
        const Uuser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: 'update sucsess', update: Uuser })
    }
    catch (err) {
        res.status(400).send('update dosnt sucsess')
    }
}

const updatePassword = (req, res) => {
    console.log('updatePassworduser')
    user.findOneAndUpdate({ name: req.params.name }, { password: req.params.password }, { new: true }).then((user) => {
        res.status(200).json({ message: 'update sucsess', update: user })

    }).catch(err => {
        res.status(400).send('update dosnt sucsess')
    })
}
const deleteUser = (req, res) => {
    console.log('update user')
    User.findOneAndDelete({ name: req.query.name }, (err, user) => {
        if (err)
            res.status(400).send(err.massege)
        else {
            res.status(400).send({ massege: 'delete sucsessful', delete: user })

        }

    })
}
module.exports = { createUser, getUser, getUserById, updateUser, updatePassword, }

