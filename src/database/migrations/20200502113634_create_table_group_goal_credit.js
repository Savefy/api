// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = (knex) => knex.schema
  .createTable('groupGoalCredit', (table) => {
    table
      .increments();

    table
      .string('description');

    table
      .bigInteger('value')
      .notNullable();

    table
      .integer('goalId')
      .references('id')
      .inTable('groupGoal');

    table
      .dateTime('date')
      .notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now());

    table
      .datetime('deletedAt');
  });

exports.down = (knex) => knex.schema
  .dropTable('groupGoalCredit');
