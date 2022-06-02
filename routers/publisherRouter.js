const router = require("express").Router();

const Publisher = require("../data/models/publisherModel");

router.get("/", (req, res, next) => {
  Publisher.findPublisher()
    .then((publishers) => {
      res.status(200).json(publishers);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yayınevi alinirken hata olustu",
        error,
      });
    });
});

router.post("/", (req, res, next) => {
  const newPublisher = req.body;

  if (!newPublisher.isim) {
    next({
      statusCode: 400,
      errorMessage: "Yayınevi eklemek icin isim girmelisiniz.",
    });
  } else {
    Publisher.addPublisher(newPublisher)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Yayınevi eklerken hata olustu!",
          error,
        });
      });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const updatedPublisher = req.body;

  if (!updatedPublisher.isim) {
    next({
      statusCode: 400,
      errorMessage: "Yayınevi ismi bos olamaz!",
    });
  } else {
    Publisher.updatePublisher(updatedPublisher, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Yayınevi duzenlenirken hata olustu!",
          error,
        });
      });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Publisher.findPublisherById(id)
    .then((willDeletePubisher) => {
      Publisher.deletePublisher(id)
        .then((deleted) => {
          if (deleted) {
            res.status(204).end();
          }
          next({
            statusCode: 400,
            errorMessage: "Silmeye calistiginiz yayınevi kayitlarda mevcut degil!",
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Yyaınevi silinirken hata olustu!",
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yayınevi bulunurken hata olustu!",
        error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Publisher.findPublisherById(id)
    .then((publisher) => {
      if (publisher) {
        res.status(200).json(publisher);
      } else {
        next({
          statusCode: 400,
          errorMessage: "Yayınevi bulunamadi.",
        });
      }
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Yayınevi bulunurken hata olustu!",
        error,
      });
    });
});

module.exports = router;
