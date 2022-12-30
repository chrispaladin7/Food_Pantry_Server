const db = require('../models/index');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const { Item } = db;
const Sequelize = require('sequelize');

// Get
exports.getAllItemsForPackage = (req, res) => {
  Item.findAll({
    where: {
      package_id: req.body.packageId
    },
  })
    .then((items) => {
      console.log(items);
      if (items) {
        res.send(items);
      } else {
        res.send({
          message: `Cannot get Items!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error getting all items for package with ID ' + req.body.packageId + '.',
      });
    });
};