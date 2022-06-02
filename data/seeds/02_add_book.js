exports.seed = async function (knex) {
  await knex('book').del()
  await knex('book').insert([
    { id: 1, isim: '1984' },
    { id: 2, isim: 'Suc ve Ceza' },
    { id: 3, isim: 'Savas ve Baris' }
  ]);
};
