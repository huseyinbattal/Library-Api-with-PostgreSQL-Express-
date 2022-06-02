exports.up = function (knex) {
  return knex.schema
    .createTable("author", (table) => {
      table.increments();
      table.string("isim").notNullable();
    })
    .createTable("book", (table) => {
      table.increments();
      table.string("isim").notNullable();
    })
    .createTable("category", (table) => {
      table.increments();
      table.string("isim").notNullable();
    })
    .createTable("publisher", (table) => {
      table.increments();
      table.string("isim").notNullable();
    })
    .createTable("authorbookcategorypublisher", (table) => {
      table.increments();
      table.integer("author_id").unsigned();
      table.integer("book_id").unsigned();
      table.integer("category_id").unsigned();
      table.integer("publisher_id").unsigned();
      table
        .foreign("author_id")
        .references("author.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("book_id")
        .references("book.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("category_id")
        .references("category.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("publisher_id")
        .references("publisher.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("authorbookcategorypublisher")
    .dropTableIfExists("publisher")
    .dropTableIfExists("category")
    .dropTableIfExists("book")
    .dropTableIfExists("author");
};
