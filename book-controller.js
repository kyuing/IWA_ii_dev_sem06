var Book = require('./models/book')

exports.createBook = function (req, res) {
  if (req.body.batch) {
    Book.insertMany(req.body.batch, function (err) {
      if (err)
        res.status(400).json(err);
      else
        res.json(req.body);
    });

  } else {
    var newbook = new Book(req.body);
    newbook.save(function (err, book) {
      if (err) {
        res.status(400).json(err);
      }
      res.json(book);
    });
  }
};

exports.getBooks = function (req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(books);
  });
};

exports.getBook = function (req, res) {
  Book.findOne({ _id: req.params.id }, function (err, book) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(book);
  });
};

exports.updateBook = function (req, res) {
  Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, book) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(book);
  });
};

exports.deleteBooks = function (req, res) {
  Book.deleteMany({}, function (err, book) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(book);
  });
};

exports.deleteBook = function (req, res) {
  // if (req.params.id == null) {
  //   Book.deleteMany({}, function (err, book) {
  //     if (err) {
  //       res.status(400).json(err);
  //     }
  //     res.json(book);
  //   });

  // } else {
    Book.findByIdAndRemove(req.params.id, function (err, book) {
      if (err) {
        res.status(400).json(err);
      }
      res.json(book);
    });
  // }
};
