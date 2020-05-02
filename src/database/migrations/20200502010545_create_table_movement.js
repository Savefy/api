// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('movement', (table) => {
    table
      .increments();

    table
      .string('title')
      .notNullable();

    table
      .enum('category', ['alimentação', 'saúde', 'transporte', 'casa', 'educação', 'outros']);

    table
      .enum('type', ['credit', 'debit'])
      .notNullable();

    table
      .dateTime('date')
      .notNullable();

    table
      .bigInteger('value')
      .notNullable();

    table
      .integer('userId')
      .references('id')
      .inTable('user');

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('movement');
