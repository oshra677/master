const { findByIdAndUpdate } = require('mongoose/lib/model')
const Post = require('../models/post')
const { findOne } = require('../models/user')
const User = require('../models/user')
const { createToken, verifyUserForJwt } = require('../token')

const View = require('../models/views')


// add post
const createPost = async (req, res) => {
    try {
        console.log('ceratePost!')
        console.log(req.body.userId)
        const user = await User.findById(req.body.userId)
        console.log(user)

        var newPost = new Post(req.body)

        // const newView = new View({
        //     date: Date.now(),
        //     post: newPost._id,

        // })
        console.log(newPost)
        newPost.userId = req.body.userId
        // console.log(req.params.userId)
        const myPost = await newPost.save()
        //const postUpdate = await Post.findByIdAndUpdate(req.params._id, { $push: { views: view._id } })

        //user.posts.push(newPost)
        //await user.save()
        console.log(myPost)
        const user1 = await User.findByIdAndUpdate(req.body.userId, { $push: { posts: myPost._id } })
        //add jwt
        console.log(user1)
        console.log('ceratepost!!!!!!!!!!!!!')
        // console.log(newPost)
        res.status(200).json({
            massege: 'post created', newPost: myPost
        })
    }
    catch (err) {
        console.log(err.massege + err)

        res.status(400).send(err)
    }



}

// get post
const getPostByIdUser = async (req, res) => {
    try {
        const use = await User.findById(req.params.id)
        console.log(use)
        const userP = await use.populate('posts').execPopulate();
        console.log("getPost!!")
        const post = await Post.findById(req.params.id).populate('userId')
        const token = verifyUserForJwt(req.headers['authorization'])
        if (post && userP.password == token && userP.email == token.email) {
            console.log(user)
            res.status(200).json({
                massege: "post sucsess",
                post: post
            })
        }
        else
            res.status(200).send("no post")
    }
    catch (err) {
        res.status(400).send(err.massege)
    }
}


// get all posts
const getAllPostsByIdUser = async (req, res) => {
    try {
        const use = await User.findById(req.params.id)
        console.log(use)
        const userP = await use.populate('posts').execPopulate();
        console.log(userP)
        const token = verifyUserForJwt(req.headers['authorization'])
        if (userP && userP.password == token && userP.email == token.email) {
            console.log("getallPosts!!")

            console.log(userP)
            res.status(200).json({
                massege: "get posts! ",
                posts: userP.posts
            })
        }
        else
            res.status(200).send("no posts")
    }
    catch (err) {
        res.status(400).send(err.massege)
    }
}
//update post
const updatePost = async (req, res) => {
    try {
        console.log('updatePost')
        let postToUpdate = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true })
        console.log("postToUpdate" + postToUpdate)
        console.log("postToUpdate._id" + postToUpdate._id)
        const newView = new View({
            date: Date.now(),
            post: postToUpdate._id,

        })
        console.log("newView" + newView)
        const view = await newView.save()
        // await postToUpdate.views.push(view._id)
        console.log("postToUpdate1" + postToUpdate)

        // await postToUpdate.save();
        const postUpdate = await Post.findByIdAndUpdate(req.params._id, { $push: { views: view._id } })
        console.log("update!!!!!!!")

        console.log("postToUpdate" + postUpdate)
        res.status(200).json({ massege: 'update sucsess', postUpdate: postToUpdate })
    }
    catch (err) {
        res.status(400).send('update dosnt sucsess')
    }
}


const deletePost = async (req, res) => {
    console.log("i in delete post function")
    try {
        // const token = req.params.token
        // const userVerfyToken = verifyUserForJwt(token)
        // const user = await findOne(userVerfyToken)
        const user = await User.findById(req.params._id)
        console.log(user)
        if (user) {
            await user.posts.pull({ '_id': req.params.idPost })
            console.log(user)
            await user.save();
            console.log("save:" + user)

            console.log('delete post')
            const post = await Post.findById(req.params.idPost)
            await post.remove()
            res.status(200).send('post delete')
        }
        res.status(200).send('post not found')
    }
    catch (err) {
        res.status(400).send({ massege: 'delete not sucsessful', delete: post })

    }

}
module.exports = { createPost, getPostByIdUser, getAllPostsByIdUser, updatePost, deletePost }

