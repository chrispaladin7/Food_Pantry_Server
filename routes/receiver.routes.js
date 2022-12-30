const { authJwt } = require('../middleware');
const controller = require('../controllers/receiver.controller');
module.exports = function (app) {
  app.post(
    '/receiver/create',
    [authJwt.verifyToken, authJwt.isReceiver],
    controller.createReceiver
  );
  app.post(
    '/receiver/update',
    [authJwt.verifyToken, authJwt.isReceiver],
    controller.updateReceiver
  );
  app.get(
    '/receiver/get',
    [authJwt.verifyToken, authJwt.isReceiver],
    controller.getReceiver
  );
};
