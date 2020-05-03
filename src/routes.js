const router = require('express').Router();

const groupGoals = require('./domains/groupGoals/routes');
const movementsRoutes = require('./domains/movement/routes');
const userGroupRoutes = require('./domains/userGroup/routes');

router.use(groupGoals);
router.use(movementsRoutes);
router.use(userGroupRoutes);

module.exports = router;
