const express = require('express'),
router = express.Router();

//ref to sample controllers
var itemCtrl = require('./item-controller'),  //ref to item-controller.js
bookCtrl = require('./book-controller');  //ref to user-controller.js

// ./item-controller
router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
router.post('/hello', itemCtrl.postWorld);

// ./book-controller
router.post('/books', bookCtrl.createBook); //insert books or a book
router.get('/books', bookCtrl.getBooks);  //find all books
router.get('/books/:id', bookCtrl.getBook);  //find a book
router.put('/books/:id', bookCtrl.updateBook); //update a book
router.delete('/books/:id', bookCtrl.deleteBook); //delete a book
router.delete('/books', bookCtrl.deleteBooks);  //delete all books

module.exports = router;  // export router 