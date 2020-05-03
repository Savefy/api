const knex = require('../../database');

const get = async (req, res) => {
  const { userId } = req.params;

  const result = await knex('userGroup').where({ userId });

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  get,
};
