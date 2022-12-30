const db = require('../models/index');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const { Receiver } = db;
const Sequelize = require('sequelize');

// Create
exports.createReceiver = (req, res) => {
  // Check if req.body was a object - receiver
  if (!req.body.receiver) {
    res.status(400).send({
      message: 'Receiver object required',
    });
    return;
  }

  // If so make new object and pass it on for creation
  // Here we can do some data validation if we want to
  let receiver = {
    user_id: req.userId,
    first_name: req.body.receiver.first_name,
    last_name: req.body.receiver.last_name,
    number_of_request: req.body.receiver.number_of_request,
    number_of_received_deliveries:
      req.body.receiver.number_of_received_deliveries,
    vegan: req.body.receiver.vegan,
    vegetarain: req.body.receiver.vegetarain,
    pescatarian: req.body.receiver.pescatarian,
    kosher: req.body.receiver.kosher,
    celiac_desease: req.body.receiver.celiac_desease,
    peanut_allergy: req.body.receiver.peanut_allergy,
    dairy_allergy: req.body.receiver.dairy_allergy,
    seafood_allergy: req.body.receiver.seafood_allergy,
    egg_allergy: req.body.receiver.egg_allergy,
  };

  // Sequalize statement for create object
  Receiver.create(receiver)
    .then((receiver) => {
      res.status(200).send({
        message: 'Receiver Content.',
        reseiver_user: receiver,
      });
    })
    .catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        console.error(error);
        res.status(200).send({
          message:
            'ERROR - Duplicate Entry! Foreign key constrain. Only one Receiver record per user. Try updating the existing. change receiver/create to /receiver/update in URL',
          error_message: error.errors[0].message,
          error_type: error.errors[0].type,
          error_path: error.errors[0].path,
          // error: error,
        });
      } else {
        res.status(200).send({
          message: 'ERROR - Some other error',
          error: error,
        });
      }
    });
};

// Get
exports.getReceiver = (req, res) => {
  console.log(req.userId);
  Receiver.findOne({
    where: {
      user_id: req.userId,
    },
    attributes: {
      exclude: ['RoleRoleId'],
    },
  })
    .then((receiver) => {
      console.log(receiver);
      if (receiver) {
        const preferences = {
          first_name: receiver.first_name,
          last_name: receiver.last_name,
          number_of_request: receiver.number_of_request,
          number_of_received_deliveries: receiver.number_of_received_deliveries,
          vegetarain: receiver.vegetarain,
          vegan: receiver.vegan,
          pescatarian: receiver.pescatarian,
          kosher: receiver.kosher,
          celiac_desease: receiver.celiac_desease,
          peanut_allergy: receiver.peanut_allergy,
          dairy_allergy: receiver.dairy_allergy,
          seafood_allergy: receiver.seafood_allergy,
          egg_allergy: receiver.egg_allergy,
        };
        res.send(preferences);
      } else {
        res.send({
          message: `Cannot get Receiver!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Receiver.',
      });
    });
};

// Update
exports.updateReceiver = (req, res) => {
  Receiver.update(req.body.receiver, {
    where: { user_id: req.userId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Receiver was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Receiver. Maybe Receiver was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: 'Error updating Receiver.',
      });
    });
};

// Delete
