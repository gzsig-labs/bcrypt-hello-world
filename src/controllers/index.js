const {PageHome} = require('./pagesController');
const {UserSignup, UserSignupPost} = require('./usersController')

const Page = {PageHome}
const User = {UserSignup, UserSignupPost}

module.exports = {Page, User}