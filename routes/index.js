// routes/index.js
const express = require('express');
const router = express.Router();
const { Homepage, indexprofile, Loginpage, Registerpage } = require('../controllers/indexcontroller');
const { isloggedin } = require('../utils/middleware');

router.get('/', Homepage);

router.get('/register', Registerpage);

router.get('/login', Loginpage);

router.get('/profile', isloggedin, indexprofile);

module.exports = router;
