const router = require('express').Router();

const authRouter = require('./auth.router');

router.use('/auth', authRouter);

// router.get('/', (req, res) => res.json('ok'));
module.exports = router;
