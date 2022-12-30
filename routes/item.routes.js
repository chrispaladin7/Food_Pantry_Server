const { authJwt } = require('../middleware');
const controller = require('../controllers/item.controller');
module.exports = function (app) {
  app.post(
    '/item/getallforpackage',
    [authJwt.verifyToken],
    controller.getAllItemsForPackage
  );
};
