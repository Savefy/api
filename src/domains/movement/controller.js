const knex = require('../../database');

const create = async (req, res) => {
  const {
    params: { userId },
    body: {
      title,
      category,
      type,
      date,
      value,
    },
  } = req;

  const result = await knex('movement')
    .insert({
      title,
      category,
      type,
      date,
      value,
      userId,
    })
    .returning('*');

  res.status(201).json({
    success: true,
    data: result,
  });
};

const get = async (req, res) => {
  const { userId } = req.params;

  const result = await knex('movement').select('*').where({ userId });

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  create,
  get,
};
