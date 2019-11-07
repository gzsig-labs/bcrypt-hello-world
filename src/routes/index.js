const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
const {Page, User} = require('../controllers');


router.get('/', Page.PageHome);
router.get('/signup', User.UserSignup);
router.post('/signup', User.UserSignupPost);
router.get('/login', User.UserSignin);
router.post('/login', User.UserSigninPost);


router.use(User.UserVerify);
router.get("/secret", User.UserSecrete);
router.get("/logout", User.UserLogout);



module.exports = {router}