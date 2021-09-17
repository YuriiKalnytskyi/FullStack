const router = require('express').Router();

const { authController: { register, login } } = require('../controllers');
const { authMiddleware: { registerMiddleware, loginMiddleware } } = require('../middlewares');
//
router.post('/register', registerMiddleware, register);
router.post('/login', loginMiddleware, login);

module.exports = router;
