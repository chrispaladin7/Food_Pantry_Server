const db = require('../models/index');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const { Package, Item } = db;
const Sequelize = require('sequelize');

// Get
exports.getAllPackages = (req, res) => {
  Package.findAll({
    include: [Item]
  })
    .then((packages) => {
      console.log(packages);
      if (packages) {
        res.send(packages);
      } else {
        res.send({
          message: `Cannot get Packages!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error getting all packages.',
      });
    });
};