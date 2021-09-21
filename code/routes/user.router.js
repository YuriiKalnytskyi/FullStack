const router = require('express').Router();

const { authController: { register, login } } = require('../controllers');
const {
  fileMiddleware: { checkFiles, checkAvatar },
  authMiddleware: { registerMiddleware, loginMiddleware }
} = require('../middlewares');

router.post('/register', registerMiddleware, checkFiles, checkAvatar, register);
router.post('/login', loginMiddleware, login);

module.exports = router;
