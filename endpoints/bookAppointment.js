const companyId = 1;
const genericBodyHandler = require("../lib/generic-body-handler");
const valueConverter = require("../lib/value-converter");
const notificationText = {
    en: "Appointment has been booked",
    ar: "يتم حجز موعدك"
};

module.exports = function(service, connectorName, validate) {


    service.post('/mobile/custom/ats/appointment', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;

        var lang = req.get("language") === "ar" ? 2 : 1;
        var resourceId = req.body.doctorId;
        var slotSerial = req.body.slotSerial;
        var categorycode = req.body.categorycode;
        var patientId = req.body.patientId;
        var token = req.body.notificationToken || null;
        console.log(req);

        oracleMobile.connectors.get(connectorName, `serviceWS/setBookingAppointments/${companyId}/${resourceId}/${slotSerial}/${patientId}/${categorycode}/${lang}`)
            .then(
                function(result) {
                    var response = valueConverter(genericBodyHandler(result.result));
                    switch (response.isPrevent) {
                        case null:
                            res.status(400).json(response);
                            break;
                        case 0:
                            res.status(409).json(response);
                            break;

                        case 1:
                            res.status(410).json(response);
                            break;

                        case 2:
                            if (token) {
                                let notification = {
                                    message: notificationText[req.get("language")],
                                    tag: 'appointment',
                                    notificationTokens: [token]
                                };
                                let context = {
                                    mbe: oracleMobile.mbe.getMBE().name,
                                    version: oracleMobile.mbe.getMBE().version
                                };
                                oracleMobile.notification.post(notification, context).then(
                                    function(result) {
                                        res.status(201).json(response);
                                        console.log(result);
                                    },
                                    function(error) {
                                        console.error(error);
                                        var newResponse = Object.assign({
                                            notificationError: error
                                        }, response);
                                        res.status(207).json(newResponse);

                                    }
                                );
                            }
                            else {
                                console.warn("no notification token is provided by the client");
                                res.status(201).json(response);
                            }
                            break;
                    }
                },
                function(error) {
                    var body = valueConverter(genericBodyHandler(error.error));
                    res.status(error.statusCode).json(body);

                }
            );
    });
};
