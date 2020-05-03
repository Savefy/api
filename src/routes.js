const router = require('express').Router();

const contentRoutes = require('./domains/content/routes');
const groupGoalsRoutes = require('./domains/groupGoals/routes');
const movementsRoutes = require('./domains/movement/routes');
const userGoalsRoutes = require('./domains/userGoals/routes');
const userGroupRoutes = require('./domains/userGroup/routes');

router.use(contentRoutes);
router.use(groupGoalsRoutes);
router.use(movementsRoutes);
router.use(userGoalsRoutes);
router.use(userGroupRoutes);

module.exports = router;
