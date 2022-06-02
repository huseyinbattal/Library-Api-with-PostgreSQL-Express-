const db = require("../db-config");

module.exports = {
  findBook,
  findBookById,
  addBook,
  updateBook,
  deleteBook,
};

function findBook() {
  return db("book");
}

function findBookById(id) {
  return db("book").where({ id }).first();
}

function addBook(newBook) {
  return db("book")
    .insert(newBook, "id")
    .then(([id]) => {
      return db("book").where({ id }).first();
    });
}

function updateBook(updatedBook, id) {
  return db("book")
    .update(updatedBook)
    .where({ id })
    .then((updated) => {
      if (updated) {
        return db("book").where({ id }).first();
      } else {
      }
    });
}

function deleteBook(id) {
  return db("book").del().where({ id });
}
