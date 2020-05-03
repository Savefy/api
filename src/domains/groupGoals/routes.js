const router = require('express').Router();
const controller = require('./controller');

router.post('/users/:userId/groupGoals', controller.create);
router.get('/users/:userId/groupGoals', controller.getByUser);

module.exports = router;
