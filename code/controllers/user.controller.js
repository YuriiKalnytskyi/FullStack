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
      console.log('--------------', e);
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const { user, body: { password } } = req;

      await passwordHesher.compare(password, user.password);

      await OAuth.deleteOne({ user: user._id });

      const tokenPair = authHelpers.generateTokenPair();

      await OAuth.create({ ...tokenPair, user: req.user });

      res.json({ ...tokenPair, userId: user._id, user });
    } catch (e) {
      next(e);
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const { user, refresh_token } = req;
      console.log(user);
      console.log(refresh_token);
      await OAuth.deleteOne({ refresh_token });

      const tokenPair = authHelpers.generateTokenPair();

      await OAuth.create({ ...tokenPair, user });
      res.json({ ...tokenPair, user });
    } catch (e) {
      next(e);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { access_token } = req;
      await OAuth.deleteOne({ refreshToken: access_token });
    } catch (e) {
      next(e);
    }
  },

  getUserByID: (req, res, next) => {
    try {
      const { user } = req;
      // console.log('++++++', user);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

};
