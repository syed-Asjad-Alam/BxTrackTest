const Book = require('../models/BookModel')
//for creating a book entity
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
//for getting a single book
exports.getbook = async (req, res) => {
    try {
        const book = await Book.findOne({_id:req.params.id})
        res.status(200).json({
            status:"Success",
            data: book
            })
 
    }

    catch (err){
        res.status(500).json({
            msg:"error"
        })
        return
    }
}
//for getting all books
exports.getallbooks = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json({
            status:"Success",
            items:book.length,
            data: book
            })
 
    }

    catch (err){
        res.status(500).json({
            msg:"error"
        })
        return
    }
}
//for updating a book
exports.updatebook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate({_id:req.params.id},{
            title:req.body.title,
            author:req.body.author,
            pages:req.body.pages,
            published_at:req.body.published_at
        })
        res.status(200).json({
            status:"Updated Successfully",
            data: book
            })
 
    }

    catch (err){
        res.status(500).json({
            msg:"error"
        })
        return
    }
}
//for deleting a book
exports.deletebook = async (req, res) => {
    try {
        const book = await Book.deleteOne({_id:req.params.id})
        res.status(200).json({
            status:"Deleted Successfully",
            data: book
            })
 
    }

    catch (err){
        res.status(500).json({
            msg:"error"
        })
        return
    }
}
