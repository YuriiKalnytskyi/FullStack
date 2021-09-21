const { USER, OAuth } = require('../dataBase');
const { statusCode } = require('../errors');
const { passwordHesher, authHelpers } = require('../helpers');
const { fileUploadService } = require('../services');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { user: { password, } } = req;
      const avatarPhotos = req.avatar;

      const hashedPassword = await passwordHesher.hash(password);

      if (avatarPhotos) {
        const a = await fileUploadService.uploadFile(avatarPhotos);
        req.body = {
          ...req.body,
          avatar: a.url
        };
      }

      const user = await USER.create({
        ...req.body,
        password: hashedPassword,
      });

      res.status(statusCode.CREATED).json({
        httpCode: 201,
        message: 'Користувач створений ',
        user,
      });
    } catch (e) {
      // res.status().json({ message: 'Щось пішло не так ' });
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const { user, body: { password } } = req;

      await passwordHesher.compare(password, user.password);

      const tokenPair = authHelpers.generateTokenPair();

      await OAuth.create({ ...tokenPair, user: req.user });

      res.json({ ...tokenPair, userId: user._id });
    } catch (e) {
      next(e);
    }
  },
};
