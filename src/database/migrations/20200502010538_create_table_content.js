// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('content', (table) => {
    table
      .increments();

    table
      .string('url');

    table
      .enum('type', ['text', 'video'])
      .notNullable();

    table
      .string('description')
      .notNullable();

    table
      .enum('category', ['compras', 'investimentos', 'rendaExtra', 'termos'])
      .notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('content');
