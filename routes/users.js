var express = require('express');
const{Homepage}=require("../controllers/indexcontroller")
const { signInpage,signUppage,Logout}=require("../controllers/usercontroller")
var router = express.Router();


/* GET users listing. */

router.get('/', Homepage);


router.post('/register' , signUppage);

router.post('/login' , signInpage); 

router.get('/logout', Logout);


module.exports = router;
