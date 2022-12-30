const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  // add restrictions
  app.get('/user/all', controller.allAccess);
  app.get('/user/user', [authJwt.verifyToken], controller.userBoard);
  app.get(
    '/user/donor',
    [authJwt.verifyToken, authJwt.isDonor],
    controller.donorBoard
  );
  app.get(
    '/user/receiver',
    [authJwt.verifyToken, authJwt.isReceiver],
    controller.receiverBoard
  );
  app.get(
    '/user/courier',
    [authJwt.verifyToken, authJwt.isCourier],
    controller.couriorBoard
  );
  app.get(
    '/user/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
