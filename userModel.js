const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    nickname: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);