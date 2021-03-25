//colecction schema
const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    name: {
        type: String,
        //required 
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
    password: {
        type: String,
        //  trim: true, minLength: '4'
    },
})

module.exports = mongoose.model('user', user_schema)