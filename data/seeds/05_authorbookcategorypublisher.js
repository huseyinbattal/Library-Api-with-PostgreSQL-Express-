exports.seed = async function (knex) {
  await knex('authorbookcategorypublisher').del()
  await knex('authorbookcategorypublisher').insert([
    { author_id: 1, book_id: 1, category_id: 1, publisher_id: 1 },
    { author_id: 2, book_id: 2, category_id: 2, publisher_id: 2 },
    { author_id: 3, book_id: 3, category_id: 3, publisher_id: 3 },
  ]);
};