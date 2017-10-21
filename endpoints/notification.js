const companyId = 1;
const genericBodyHandler = require("../lib/generic-body-handler");
const valueConverter = require("../lib/value-converter");
const notificationText = {
    en: "",
    ar: "يتم حجز موعدك"
};

module.exports = function(service, connectorName, validate) {


    service.post('/mobile/custom/ats/notification', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;

        var token = req.get('notificationToken') || "447beccebfda17ff861d8a94e40da699cadddf13b3b9850a7e2ac9272d6c8326";

        if (token) {
            let notification = {
                message: "alper",
                tag: 'appointment',
                notificationTokens: [token]
            };
            let context = {
                mbe: oracleMobile.mbe.getMBE().name,
                version: oracleMobile.mbe.getMBE().version
            };
            console.log(`Notification about to sent`);
            oracleMobile.notification.post(notification, context).then(
                function(result) {
                    console.info(result);
                    console.info("alper - info");
                    res.status(200).json(result);
                },
                function(error) {
                    console.error(error);
                    console.error("alper - error");
                    res.status(500).json(error);
                }
            );
        }
    });
};
