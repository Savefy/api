exports.up = (knex) => knex.schema
  .createTable('user', (table) => {
    table
      .increments();

    table
      .string('nickname')
      .notNullable();

    table
      .string('name')
      .notNullable();

    table
      .string('password')
      .notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('user');
