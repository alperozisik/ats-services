var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false },
    body: {
        username: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
        deviceType: Joi.string().regex(/^(?:iOS|Android)$/).required(),
        notificationToken: Joi.string().optional()
    }
};