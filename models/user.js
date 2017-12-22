const mongoose = require('lib/mongoose'),
    Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

modules.exports.User = mongoose.model('User', schema);