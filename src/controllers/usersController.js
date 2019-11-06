const {UserModel} = require('../models');

const UserSignup = (req, res) => {
  res.render('auth/signup')
};

module.exports = {
  UserSignup
}