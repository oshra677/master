const router = require('express').Router()
const user = require('../controllers/userController')
const post = require('../controllers/postController')
const view=require('../controllers/viewsController')


router.post('/createUser', user.createUser)
router.get('/getUserById/:password/:email', user.getUserById)
router.put('/updatePassword/:email/:userId/:password', user.updatePassword)
router.delete('/deleteUser/:id', user.deleteUser)

router.post('/createPost', post.createPost)
router.get('/getPostByIdUser/:_id', post.getPostByIdUser)
router.get('/getAllPostsByIdUser/:_id', post.getAllPostsByIdUser)
router.put('/updatePost/:_id', post.updatePost)
router.delete('/deletePost/:_id/:idPost', post.deletePost)




router.post('/createViews/:postId',view.createViews)
router.get('/getViewsByIdUser/:id',view.getViewsByIdUser)
router.delete('/deleteView/:id', view.deleteView)


module.exports = router