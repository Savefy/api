const knex = require('../../database');

const create = async (req, res) => {
  const {
    groupId,
    accomplishAt,
    title,
    description,
    valueGoal,
  } = req.body;

  const result = await knex('groupGoal')
    .insert({
      groupId,
      accomplishAt,
      title,
      description,
      valueGoal,
    }).returning('*');

  res.status(201).json({
    success: true,
    data: result,
  });
};

const getByUser = async (req, res) => {
  const { userId } = req.params;

  const result = await knex('userGroup')
    .select('groupGoal.*')
    .innerJoin('groupGoal', (builder) => {
      builder
        .on(knex.raw(`"userGroup"."userId" = ${userId}`))
        .andOn('userGroup.groupId', 'groupGoal.groupId');
    });

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  create,
  getByUser,
};
