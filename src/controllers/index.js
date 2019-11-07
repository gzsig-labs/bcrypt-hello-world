const {PageHome} = require('./pagesController');
const {UserSignup, UserSignupPost, UserSignin, UserSigninPost, UserVerify, UserSecrete, UserLogout} = require('./usersController')

const Page = {PageHome}
const User = {UserSignup, UserSignupPost, UserSignin, UserSigninPost, UserVerify, UserSecrete, UserLogout}

module.exports = {Page, User}