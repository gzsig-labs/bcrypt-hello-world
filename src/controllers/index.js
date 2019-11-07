const {PageHome} = require('./pagesController');
const {UserSignup, UserSignupPost, UserSignin, UserSigninPost, UserVerify, UserSecrete} = require('./usersController')

const Page = {PageHome}
const User = {UserSignup, UserSignupPost, UserSignin, UserSigninPost, UserVerify, UserSecrete}

module.exports = {Page, User}