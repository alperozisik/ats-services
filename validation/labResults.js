var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false },
    header: {
        lanugage: Joi.string().optional().regex(/^(?:en|ar)$/)
    },
    params: {
        orderNo: Joi.string()
    }
};
