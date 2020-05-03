const router = require('express').Router();
const controller = require('./controller');

router.get('/users/:userId/groups', controller.get);

module.exports = router;
