exports.seed = (knex) => knex('group').del()
  .then(async () => knex('group').insert([
    {
      id: 1,
      description: 'Grupo da família Silva',
      title: 'Família Silva',
    },
  ]));
