exports.seed = (knex) => knex('userGroup').del()
  .then(async () => knex('userGroup').insert([
    {
      id: 1,
      userId: 1,
      groupId: 1,
    },
    {
      id: 2,
      userId: 2,
      groupId: 1,
    },
  ]));
