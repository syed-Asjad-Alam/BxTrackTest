const Book = require('../models/BookModel')

exports.createbook = async (req, res) => {
    try {
        const book = new Book({
            title:req.body.title,
            author:req.body.author,
            pages:req.body.pages,
            published_at:req.body.published_at
        })

        book.save().then(
            res.status(200).json({
                msg:"Book Created Successfully",
                data: book
            })
        )

    }

    catch (err){
        res.status(500).json({
            msg:"error"
        })
        return
    }
}