exports.seed = async function(knex) {
  await knex('category').del()
  await knex('category').insert([
    {id: 1, isim: 'Roman'},
    {id: 2, isim: 'Roman'},
    {id: 3, isim: 'Roman'}
  ]);
};
