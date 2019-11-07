const {UserModel} = require('../models');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;


const UserSignup = (req, res) => {
  res.render('auth/signup')
};

const UserSignupPost = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  console.log(username);
  console.log(password);
  console.log(hashPass);
  if (username === '' || password === '') {
    res.render('auth/signup', {
      errorMsg: "Username or Password is blank"
    });
    return
  }
  UserModel.findOne({'username': username})
  .then( (user) => {
    if(user !== null) {
      res.render('auth/signup', {
        errorMsg: "Username has already been taken!"
      });
      return
    }
  })
  .catch ( (err) =>{
    next(err);
  });
  UserModel.create({
    username,
    password: hashPass
  })
  .then( () => {
    res.redirect('/');
  })
  .catch( (err) => {
    console.log(err)
  })
};

const UserSignin = (req, res) => {
  res.render('./auth/login')
};

module.exports = {
  UserSignup,
  UserSignupPost,
  UserSignin
}