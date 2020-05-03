const knex = require('../../database');

const create = async (req, res) => {
  const {
    params: { userId },
    body: {
      title,
      description,
      valueGoal,
      accomplishAt,
    },
  } = req;

  const result = await knex('userGoal')
    .insert({
      userId,
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

  const result = await knex('userGoal')
    .select('*')
    .where({ userId });

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = { create, getByUser };
