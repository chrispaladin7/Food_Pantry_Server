const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models/index');
const { User } = db;

// Token
verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    req.userId = decoded.id;
    next();
  });
};

// Donor
isDonor = (req, res, next) => {
  User.findByPk(req.userId, {
    attributes: {
      exclude: ['RoleRoleId'],
    },
  }).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        console.log(roles[i].user_type);
        if (roles[i].user_type === 'donor') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Donor Role!',
      });
      return;
    });
  });
};

// Receiver
isReceiver = (req, res, next) => {
  User.findByPk(req.userId, {
    attributes: {
      exclude: ['RoleRoleId'],
    },
  }).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].user_type === 'receiver') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Receiver Role!',
      });
      return;
    });
  });
};

// Courier
isCourier = (req, res, next) => {
  User.findByPk(req.userId, {
    attributes: {
      exclude: ['RoleRoleId'],
    },
  }).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].user_type === 'courier') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Courier Role!',
      });
      return;
    });
  });
};

// Admin
isAdmin = (req, res, next) => {
  User.findByPk(req.userId, {
    attributes: {
      exclude: ['RoleRoleId'],
    },
  }).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].user_type === 'admin') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Admin Role!',
      });
      return;
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isDonor: isDonor,
  isReceiver: isReceiver,
  isCourier: isCourier,
};
module.exports = authJwt;
