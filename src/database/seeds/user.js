const bcrypt = require('bcryptjs');

exports.seed = (knex) => knex('user').del()
  .then(async () => knex('user').insert([
    {
      id: 1,
      nickname: 'lucas.silva',
      name: 'Lucas Silva',
      password: await bcrypt.hash('12345678', 10),
    },
    {
      id: 2,
      nickname: 'maria.silva',
      name: 'Maria Silva',
      password: await bcrypt.hash('87654321', 10),
    },
  ]));
