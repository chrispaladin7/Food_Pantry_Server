const { authJwt } = require('../middleware');
const controller = require('../controllers/package.controller');
module.exports = function (app) {
  app.get(
    '/package/getall',
    [authJwt.verifyToken],
    controller.getAllPackages
  );
};
