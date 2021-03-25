const Post = require('../models/post')
const Views = require('../models/views')
const User = require('../models/user')
//const { populate } = require('../models/user')
//const Post = require('../routes/api')

// add view
//מקבלים בפאראמס את האי די של הפוסט שבו צפו
const createViews = async (req, res) => {
    try {
        console.log('cerateView!')

        const post = await Post.findById(req.params.postId)
        const newViews = new Views(req.body)
        newViews.post = post._id
        await newViews.save()
        post.views.push(newviews)
        //await Post.findByIdAndUpdate(req.params.id, {$push: { views: newviews._id } })

        //add jwt
        res.status(200).send.json({
            massege: 'view created', newViews: newViews
        })
    }
    catch (err) {
        res.status(400).send(err)
    }
    console.log('cerateView!!!!!!!!!!!!!')
    console.log(newviews)
}

// get post
const getViewsByIdUser = async (req, res) => {
    try {
        console.log("getallViews!!")
        const views = await User.findById(req.params.id).populate(
            {
                path: "posts",
                // select: { posts: 1 },
                populate: {
                    path: "views",
                }
            }
        )

        if (views) {
            console.log(views)
            res.status(200).json({
                massege: "get views ",
                views: views
            })
        }
        else
            res.status(200).send("no views")
    }
    catch (err) {
        res.status(400).send(err.massege)
    }
}



const deleteView = async(req, res) => {
    try {

        console.log('delete View')
        const view = await view.findById(req.params.id)
        await post.remove()
        res.status(200).send('view delete')
    }
    catch (err) {
        res.status(400).send({ massege: 'delete sucsessful', delete: post })

    }

}
module.exports = { createViews, getViewsByIdUser, deleteView }
