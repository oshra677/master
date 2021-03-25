const User = require('../models/user')
const Post = require('../models/post')
const { createToken, verifyUserForJwt } = require('../token')

// add user
const createUser = async (req, res) => {
    console.log('cerateuser!')

    try {
        //add jwt
        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(200).json({
            massege: 'user created', newUser: user
        })
    }
    catch (err) {
        res.status(400).json({ massege: err.massege })
    }
    console.log('cerateuser!!!!!!!!!!!!!')
    console.log(newUser)

}

// get user
const getUserById = async (req, res) => {
    try {
        console.log("getUser!!")
        // const user = await User.findById(req.params.id).populate("posts")
        const user = await User.findOne({ email: req.params.email, password: req.params.password }).populate("posts")

        if (user) {
            const token = createToken(user)
            console.log(token)
            console.log(user)
            res.status(200).json({
                massege: "user sucsess",
                user: user,
                token: token
            })
        }
        else
            res.status(200).json({
                massege: "no user",

            })
    }
    catch (err) {
        res.status(400).send(err.massege)
    }
}


//update user
// const updateUser = async (req, res) => {
//     try {
//         const Uuser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.status(200).json({ massege: 'update sucsess', update: Uuser })
//     }
//     catch (err) {
//         res.status(400).send('update dosnt sucsess')
//     }
// }

const updatePassword =async (req, res) => {
        try {
            console.log('updatePassworduser')

            // const user = await User.findOneAndUpdate({userId: req.params.userId },{password:req.params.password },{
            //     returnOriginal: false}).populate("posts")
            console.log( "userId" +req.params.userId+"email"+req.params.email)
            const filter = { userId: req.params.userId,email:req.params.email};
            const update = { password: req.params.password };
            //let user = await User.findOne({filter})
          //  console.log(user)
            let user = await User.findOneAndUpdate(filter,update, {
                new: true,
                upsert: true,
                rawResult: true // Return the raw result from the MongoDB driver
            });
            // await User.updateOne({userId: req.params.userId },{password:req.params.password });
            //const user = { name: "odf" }
              console.log(user)

            if (user) {
                const token = createToken(user)
                console.log(token)
                console.log(user)
                res.status(200).json({
                    massege: "user sucsess",
                    updateUser: user,
                    token: token
                })
            }
            else
                res.status(200).json({
                    massege: "no user",
                })
        }
        // user.findOneAndUpdate({ email: req.params.email,userId: req.params.userId }, { , { new: true }).then((user) => {
        catch (err) {
            res.status(400).send(err.massege)
        }

    }
const deleteUser = (req, res) => {
    console.log('update user')
    User.findOneAndDelete({ name: req.params._id }, (err, user) => {
        if (err)
            res.status(400).send(err.massege)
        else {
            res.status(400).send({ massege: 'delete sucsessful', delete: user })

        }

    })
}
module.exports = { createUser, getUserById, updatePassword, deleteUser }

