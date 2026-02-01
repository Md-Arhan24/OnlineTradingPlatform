const {SingUp, Login} = require('../contollers/AuthController');
const {userVerification} = require('../middlewares/AuthMiddleware');
const router = require('express').Router();
router.post('/signup',SingUp);
router.post('/login',Login);
router.post('/',userVerification);


module.exports = router;