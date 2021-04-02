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
// router.post('/books', bookCtrl.createBooks);
router.post('/books', bookCtrl.createBook);
router.get('/books', bookCtrl.getBooks);  
router.get('/books/:id', bookCtrl.getBook); 
router.put('/books/:id', bookCtrl.updateBook); 
router.delete('/books/:id', bookCtrl.deleteBook);
// router.delete('/books/:id', bookCtrl.deleteBook);

module.exports = router;  // export router 