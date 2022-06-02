const router = require("express").Router();

const Author = require("../data/models/authorModel");

router.get("/", (req, res, next) => {
  Author.findAuthor()
    .then((authors) => {
      res.status(200).json(authors);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yazarlar alinirken hata olustu",
        error,
      });
    });
});

router.post("/", (req, res, next) => {
  const newAuthor = req.body;

  if (!newAuthor.isim) {
    next({
      statusCode: 400,
      errorMessage: "Yazar eklemek icin isim girmelisiniz.",
    });
  } else {
    Author.addAuthor(newAuthor)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Yazar eklerken hata olustu!",
          error,
        });
      });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const updatedAuthor = req.body;

  if (!updatedAuthor.isim) {
    next({
      statusCode: 400,
      errorMessage: "Yazar ismi bos olamaz!",
    });
  } else {
    Author.updateAuthor(updatedAuthor, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Yazar duzenlenirken hata olustu!",
          error,
        });
      });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Author.findAuthorById(id)
    .then((willDeleteAuthor) => {
      Author.deleteAuthor(id)
        .then((deleted) => {
          if (deleted) {
            res.status(204).end();
          }
          next({
            statusCode: 400,
            errorMessage: "Silmeye calistiginiz yazar kayitlarda mevcut degil!",
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Yazar silinirken hata olustu!",
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yazar bulunurken hata olustu!",
        error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Author.findAuthorById(id)
    .then((author) => {
      if (author) {
        res.status(200).json(author);
      } else {
        next({
          statusCode: 400,
          errorMessage: "Yazar bulunamadi.",
        });
      }
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yazar bulunurken hata olustu!",
        error,
      });
    });
});

module.exports = router;
