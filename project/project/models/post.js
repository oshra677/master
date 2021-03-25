
const mongoose = require('mongoose')
const user = require('./user')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        // required:true,
    },
    body: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    views:[{
        type: mongoose.Schema.Types.ObjectId,
ref: 'views'
    }]
})
postSchema.pre('remove', async function (next) {
    console.log('pro succses')
    await User.findByIdAndUpdate(this.userId, { $pull: { posts: this._id } })
    next()
})
// postSchema.post('save', async function (next) {
//     console.log('save succses!')
//     next()
// })
module.exports = mongoose.model('post', postSchema)