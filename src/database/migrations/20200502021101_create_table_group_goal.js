// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('groupGoal', (table) => {
    table
      .increments();

    table
      .string('title')
      .notNullable();

    table
      .string('description');

    table
      .bigInteger('valueGoal')
      .notNullable();

    table
      .integer('groupId')
      .references('id')
      .inTable('group');

    table
      .date('accomplishAt')
      .notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('groupGoal');
