const router = require('express').Router();
const controller = require('./controller');

router.get('/users/:userId/movements', controller.get);

module.exports = router;
