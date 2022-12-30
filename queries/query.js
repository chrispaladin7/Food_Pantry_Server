// const { User, Role } = require('../models');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// // Find all users with their associated roles
// // Raw SQL: SELECT * FROM users JOIN roles ON roles.user_id = users.user_id;
// const findAllWithRoles = async () => {
//   const users = await User.findAll({
//     include: [
//       {
//         model: Role,
//       },
//     ],
//   });
//   console.log(
//     'All users with their associated roles:',
//     JSON.stringify(users, null, 4)
//   );
// };

// // Find a role with its associated user
// // Raw SQL: SELECT * FROM roles JOIN users ON users.user_id = roles.user_id;
// const findRolesWithUser = async () => {
//   const roles = await Role.findAll({
//     include: [
//       {
//         model: User,
//       },
//     ],
//   });
//   console.log(
//     'All roles with their associated user:',
//     JSON.stringify(roles, null, 4)
//   );
// };

// const run = async () => {
//   await findAllWithRoles();
//   await findRolesWithUser();
//   await process.exit();
// };

// run();
