const { Book } = require('../models')

// GET all books
exports.index = async(req, res) => {
    try {
        const books = await Book.findAll()
        res.send(books)
    } catch (err) {
        res.status(500).send(err)
    }
}

// GET one
exports.show = async(req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId)
        res.send(book)
    } catch (err) {
        res.status(500).send(err)
    }
}

// CREATE
exports.create = async(req, res) => {
    try {
        const book = await Book.create(req.body)
        res.send(book)
    } catch (err) {
        res.status(500).send(err)
    }
}

// UPDATE
exports.put = async(req, res) => {
    try {
        await Book.update(req.body, {
            where: { id: req.params.bookId }
        })
        res.send(req.body)
    } catch (err) {
        res.status(500).send(err)
    }
}

// DELETE
exports.remove = async(req, res) => {
    try {
        await Book.destroy({
            where: { id: req.params.bookId }
        })
        res.send({ message: 'Book deleted' })
    } catch (err) {
        res.status(500).send(err)
    }
}
exports.update = async(req, res) => {
    try {
        const book = await Book.findByPk(req.params.id)

        if (!book) {
            return res.status(404).send('Book not found')
        }

        await book.update(req.body)

        res.send(book)
    } catch (err) {
        res.status(500).send(err)
    }
}