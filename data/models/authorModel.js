const db = require("../db-config");

module.exports = {
  findAuthor,
  findAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};

function findAuthor() {
  return db("author");
}

function findAuthorById(id) {
  return db("author").where({ id }).first();
}

function addAuthor(newAuthor) {
  return db("author")
    .insert(newAuthor, "id")
    .then(([id]) => {
      return db("author").where({ id }).first();
    });
}

function updateAuthor(updatedAuthor, id) {
  return db("author")
    .update(updatedAuthor)
    .where({ id })
    .then((updated) => {
      if (updated) {
        return db("author").where({ id }).first();
      } else {
      }
    });
}

function deleteAuthor(id) {
  return db("author").del().where({ id });
}
