var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false },
    header: {
        lanugage: Joi.string().optional().regex(/^(?:en|ar)$/)
    },
    path: {
        clinicNo: Joi.string().required(),
        period: Joi.string().required(),
        date: Joi.string().required().regex(/^(2\d{3})-([01]?\d)-([0-3]?\d)$/),
    }
};
