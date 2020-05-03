const routes = require('express').Router();
const controller = require('./controller');

routes.post('/users/:userId/goals', controller.create);
routes.get('/users/:userId/goals', controller.getByUser);

module.exports = routes;
