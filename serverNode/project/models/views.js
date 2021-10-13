
const mongoose = require('mongoose')
const Post = require('./post')

const viewSchema = mongoose.Schema({
    date: {
        type:Date,
        // required:true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
       rer:'post'
        // required:true,
    }
   
})
viewSchema.pre('remove', async function (next) {
    console.log('pre succses')
    await Post.findByIdAndUpdate(this._id, { $pull: { views: this._id } })
    next()
})
// postSchema.post('save', async function (next) {
//     console.log('save succses!')
//     next()
// })
module.exports = mongoose.model('views', viewSchema,)