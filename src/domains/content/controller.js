const knex = require('../../database');

const create = async (req, res) => {
  const {
    title,
    sourceUrl,
    imageUrl,
    type,
    author,
    body,
    description,
    category,
  } = req.body;

  const result = await knex('content')
    .insert({
      title,
      sourceUrl,
      imageUrl,
      type,
      author,
      body,
      description,
      category,
    }).returning('*');

  res.status(201).json({
    success: true,
    data: result,
  });
};

const get = async (req, res) => {
  const { category } = req.query;

  let query = knex('content')
    .select('*');

  if (category) {
    query = knex('content')
      .select('*')
      .where({ category });
  }

  const result = await query;

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  create,
  get,
};
