exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};
exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};
exports.donorBoard = (req, res) => {
  res.status(200).send('Donor Content.');
};
exports.receiverBoard = (req, res) => {
  res.status(200).send('Receiver Content.');
};
exports.couriorBoard = (req, res) => {
  res.status(200).send('Courier Content.');
};
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};
