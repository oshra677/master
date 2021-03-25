
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phon: {
        type: String, default: '',
        // validate: {
        //     validator: function (v) {
        //         return /^$^\d{10}$/.test(v);
        //     },
        //     // massage: props => `${props.value}is not a valid phon number`
        // }
    },
    email: {
        type: String, default: '',
        // validate: {
        //     validator: function (v) {
        //         return /^$^\d{10}$/.test(v);
        //     },
        //     // massage: props => `${props.value}is not a valid phon number`
        // }
    },
    password: {
        type: String,
        //  trim: true, minLength: '4'
    },
    userId:{
        type: String,

    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
})

module.exports = mongoose.model('user', userSchema)