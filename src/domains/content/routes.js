const router = require('express').Router();
const controller = require('./controller');

router.post('/contents', controller.create);

module.exports = router;
