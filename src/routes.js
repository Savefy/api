const router = require('express').Router();

const groupGoals = require('./domains/groupGoals/routes');
const movementsRoutes = require('./domains/movement/routes');
const userGoalsRoutes = require('./domains/userGoals/routes');
const userGroupRoutes = require('./domains/userGroup/routes');

router.use(groupGoals);
router.use(movementsRoutes);
router.use(userGoalsRoutes);
router.use(userGroupRoutes);

module.exports = router;
