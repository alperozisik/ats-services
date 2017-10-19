var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false },
    header: {
        lanugage: Joi.string().optional().regex(/^(?:en|ar)$/)
    },
    body: {
        doctorId: [Joi.string().required(), Joi.number().required()],
        slotSerial: [Joi.string().required(), Joi.number().required()],
        categorycode: [Joi.string().required(), Joi.number().required()],
        patientId: [Joi.string().required(), Joi.number().required()],
        notificationToken: Joi.string().optional()
    }
};
