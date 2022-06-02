exports.seed = async function(knex) {
  await knex('publisher').del()
  await knex('publisher').insert([
    {id: 1, isim: 'ABC Yayınevi'},
    {id: 2, isim: 'Adım Yayıncılık'},
    {id: 3, isim: 'Akif Yayınları'}
  ]);
};