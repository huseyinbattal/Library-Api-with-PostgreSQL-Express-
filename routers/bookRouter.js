const router = require("express").Router();

const Book = require("../data/models/bookModel");

router.get("/", (req, res, next) => {
  Book.findBook()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kitaplar alinirken hata olustu",
        error,
      });
    });
});

router.post("/", (req, res, next) => {
  const newBook = req.body;

  if (!newBook.isim) {
    next({
      statusCode: 400,
      errorMessage: "Kitap eklemek icin isim girmelisiniz.",
    });
  } else {
    Book.addBook(newBook)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Kitap eklerken hata olustu!",
          error,
        });
      });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const updatedBook = req.body;

  if (!updatedBook.isim) {
    next({
      statusCode: 400,
      errorMessage: "Kitap ismi bos olamaz!",
    });
  } else {
    Book.updateBook(updatedBook, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Kitap duzenlenirken hata olustu!",
          error,
        });
      });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Book.findBookById(id)
    .then((willDeleteBook) => {
      Book.deleteBook(id)
        .then((deleted) => {
          if (deleted) {
            res.status(204).end();
          }
          next({
            statusCode: 400,
            errorMessage: "Silmeye calistiginiz kitap kayitlarda mevcut degil!",
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Kitap silinirken hata olustu!",
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kitap bulunurken hata olustu!",
        error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Book.findBookById(id)
    .then((book) => {
      if (book) {
        res.status(200).json(book);
      } else {
        next({
          statusCode: 400,
          errorMessage: "Kitap bulunamadi.",
        });
      }
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kitap bulunurken hata olustu!",
        error,
      });
    });
});

module.exports = router;
