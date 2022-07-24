// routes/api/books.js

const express = require('express');
const router = express.Router();


//Load Book Model

const Book = require('../../models/Book');


// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Books Works'}));

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', (req, res) => {
    Book.find()
        .sort({date: -1})
        .then(books => res.json(books))
        .catch(err => res.status(404).json({notfound: 'No books found'}));
});

// @route   GET api/books/:id
// @desc    Get book by id
// @access  Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({notfound: 'No book found with that ID'}));
});

// @route   POST api/books
// @desc    add/save book
// @access  Public
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to add book'}));
});

// @route   GET api/books/:id
// @desc    update book
// @access  Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Book updated successfully'}))
        .catch(err => res.status(404).json({error: 'Unable to update database'}));
});


// @route   DELETE api/books/:id
//  @desc    Delete book by id
//  @access  Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
        .then(() => res.json({msg: 'Book deleted successfully'}))
        .catch(err => res.status(404).json({error: 'Unable to delete book'}));
});

module.exports = router;
