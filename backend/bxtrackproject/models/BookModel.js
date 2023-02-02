const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
    {
        title: {
            type:String
        },
        author: {
            type:String
        },
        pages: {
            type:Number
        },
        published_at: {
            type:Date,
            default:Date.now()
        },

    }
)

const book = mongoose.model("Book",BookSchema)
module.exports = book