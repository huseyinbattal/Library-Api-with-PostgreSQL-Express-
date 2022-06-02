const router = require("express").Router();

const Category = require("../data/models/categoryModel");

router.get("/", (req, res, next) => {
  Category.findCategory()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kategoriler alinirken hata olustu",
        error,
      });
    });
});

router.post("/", (req, res, next) => {
  const newCategories = req.body;

  if (!newCategories.isim) {
    next({
      statusCode: 400,
      errorMessage: "Kategori eklemek icin isim girmelisiniz.",
    });
  } else {
    Category.addCategory(newCategories)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Kategori eklerken hata olustu!",
          error,
        });
      });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const updatedCategory = req.body;

  if (!updatedCategory.isim) {
    next({
      statusCode: 400,
      errorMessage: "Kategori ismi bos olamaz!",
    });
  } else {
    Category.updateCategory(updatedCategory, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Kategori duzenlenirken hata olustu!",
          error,
        });
      });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Category.findCategoryById(id)
    .then((willDeleteCategory) => {
      Category.deleteCategory(id)
        .then((deleted) => {
          if (deleted) {
            res.status(204).end();
          }
          next({
            statusCode: 400,
            errorMessage: "Silmeye calistiginiz kategori kayitlarda mevcut degil!",
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Kategori silinirken hata olustu!",
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kategori bulunurken hata olustu!",
        error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Category.findCategoryById(id)
    .then((category) => {
      if (category) {
        res.status(200).json(category);
      } else {
        next({
          statusCode: 400,
          errorMessage: "Kategori bulunamadi.",
        });
      }
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Kategori bulunurken hata olustu!",
        error,
      });
    });
});

module.exports = router;
