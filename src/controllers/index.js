const {PageHome} = require('./pagesController');
const {UserSignup, UserSignupPost, UserSignin} = require('./usersController')

const Page = {PageHome}
const User = {UserSignup, UserSignupPost, UserSignin}

module.exports = {Page, User}