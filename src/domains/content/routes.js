const router = require('express').Router();
const controller = require('./controller');

router.post('/contents', controller.create);
router.get('/contents', controller.get);

module.exports = router;
