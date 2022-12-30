const db = require('../models/index');
const config = require('../config/auth.config');
const { User, Role, Receiver } = db;
const Op = db.Sequelize.Op;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

// register
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    bio: req.body.bio,
    activity_status: true,
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            user_type: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: 'User was registered successfully!' });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: 'User was registered successfully!' });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// login
exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
    attributes: {
      exclude: ['RoleRoleId'],
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }
      var token = jwt.sign({ id: user.user_id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      var preferences = {};

      user.getRoles().then(async (roles) => {
        var outer;
        for (let i = 0; i < roles.length; i++) {
          var role = roles[i].user_type.toUpperCase();
          authorities.push('ROLE_' + role);
        }

        res.status(200).send({
          id: user.user_id,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
