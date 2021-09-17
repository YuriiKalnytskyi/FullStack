const Joi = require('joi');

const { regexpEnum: { EMAIl, PASSWORD } } = require('../constants');

module.exports = {
  createUser: Joi.object({
    email: Joi.string()
      .regex(EMAIl)
      .required(),

    password: Joi.string()
      .required()
      .regex(PASSWORD)
  }),
  login: Joi.object({

    email: Joi.string()
      .regex(EMAIl)
      .required(),

    password: Joi.string()
      .required()
      .regex(PASSWORD)
  })
};
