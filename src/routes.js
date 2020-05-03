const router = require('express').Router();

const userGroupRoutes = require('./domains/userGroup/routes');

router.use(userGroupRoutes);

module.exports = router;
