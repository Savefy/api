const knex = require('../../database');

const get = async (req, res) => {
  const { userId } = req.params;

  const result = await knex('userGroup')
    .select('group.*')
    .innerJoin('group', (builder) => {
      builder
        .on(knex.raw(`"userGroup"."userId" = ${userId}`))
        .andOn('userGroup.groupId', 'group.id');
    });

  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  get,
};
