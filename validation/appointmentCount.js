var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false },
    path: {
        clinicNo: Joi.string().required(),
        doctorId: Joi.string().required(),
        yearMonth: Joi.string().required().regex(/^(2\d{3})-([0-3]\d)$/),
    }
};
