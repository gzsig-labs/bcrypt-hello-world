const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
const {Page, User} = require('../controllers');


router.get('/', Page.PageHome);
router.get('/signup', User.UserSignup);

module.exports = {router}