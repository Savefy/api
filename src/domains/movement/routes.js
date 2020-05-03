const router = require('express').Router();
const controller = require('./controller');

router.post('/users/:userId/movements', controller.create);
router.get('/users/:userId/movements', controller.get);

module.exports = router;
