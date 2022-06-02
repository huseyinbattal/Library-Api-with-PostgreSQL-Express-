exports.seed = async function(knex) {
  await knex('author').del()
  await knex('author').insert([
    {id: 1, isim: 'George Orwell'},
    {id: 2, isim: 'Fyodor Dostoyevski'},
    {id: 3, isim: 'Lev Tolstoy'}
  ]);
};
