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

const UserSigninPost = (req, res) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMsg: "Please enter both, username and password to sign up."
    });
    return;
  }

  UserModel.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMsg: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/secret");
      } else {
        res.render("auth/login", {
          errorMsg: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error);
  })
};

const UserVerify = (req, res, next) => {
  if (req.session.currentUser) { 
    next(); 
  } else {                         
    res.redirect("/login");        
  }                                
};

const UserSecrete = (req, res) => {
  const user = req.session.currentUser
  res.render('pages/logedin', {user})
};

const UserLogout = (req, res) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
}

module.exports = {
  UserSignup,
  UserSignupPost,
  UserSignin,
  UserSigninPost,
  UserVerify,
  UserSecrete,
  UserLogout
}