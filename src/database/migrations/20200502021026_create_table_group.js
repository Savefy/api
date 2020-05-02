// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('group', (table) => {
    table
      .increments();

    table
      .string('description')
      .notNullable();

    table
      .string('title')
      .notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('group');
