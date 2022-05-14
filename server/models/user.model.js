const { mongoose } = require('mongoose')

const User = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique:true},
        // Unique implies no duplicate value for email
        password: {type: String, required: true},
        // phrase: {type: String, required: true},
    },
    {
        collection: 'userdata'
    }
)

const model = mongoose.model('UserData', User)

module.exports = model