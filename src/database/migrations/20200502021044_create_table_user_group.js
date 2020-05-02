// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('userGroup', (table) => {
    table
      .increments();

    table
      .integer('userId')
      .references('id')
      .inTable('user');

    table
      .integer('groupId')
      .references('id')
      .inTable('group');

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('userGroup');
