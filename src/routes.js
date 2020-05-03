const router = require('express').Router();

const movementsRoutes = require('./domains/movement/routes');
const userGroupRoutes = require('./domains/userGroup/routes');

router.use(movementsRoutes);
router.use(userGroupRoutes);

module.exports = router;
