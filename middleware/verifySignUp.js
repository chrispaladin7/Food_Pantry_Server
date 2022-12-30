const db = require('../models/index');
const { User, Role } = db;

checkDuplicateEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      email: req.body.email,
    },
    attributes: {
      exclude: ['RoleRoleId'],
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
      return;
    }
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      // Username
      Role.findOne({
        where: {
          user_type: req.body.roles[i],
        },
      }).then((role) => {
        if (!role) {
          res.status(400).send({
            message: 'Failed! Role does not exist = ' + req.body.roles[i],
          });
          return;
        }
      });
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateEmail,
  checkRolesExisted,
};
module.exports = verifySignUp;
