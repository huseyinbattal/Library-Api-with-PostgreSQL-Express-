const db = require("../db-config");

module.exports = {
  findPublisher,
  findPublisherById,
  addPublisher,
  updatePublisher,
  deletePublisher,
};

function findPublisher() {
  return db("publisher");
}

function findPublisherById(id) {
  return db("publisher").where({ id }).first();
}

function addPublisher(newPublisher) {
  return db("publisher")
    .insert(newPublisher, "id")
    .then(([id]) => {
      return db("publisher").where({ id }).first();
    });
}

function updatePublisher(updatedPublisher, id) {
  return db("publisher")
    .update(updatedPublisher)
    .where({ id })
    .then((updated) => {
      if (updated) {
        return db("publisher").where({ id }).first();
      } else {
      }
    });
}

function deletePublisher(id) {
  return db("publisher").del().where({ id });
}
