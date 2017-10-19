const genericBodyHandler = require("../lib/generic-body-handler");

module.exports = function(service, connectorName, validate) {
    service.post('/mobile/custom/ats/patient/login', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var password = req.body.password;
        var nickname = req.body.username;
        var token = req.body.notificationToken || "";
        var osCode = req.body.deviceType === "iOS" ? 1 : 2;

        oracleMobile.connectors.get(connectorName, `loginWS/login/1/${password}/${nickname}/${token}/${osCode}`)
            .then(
                function(result) {
                    var body = genericBodyHandler(result.result);
                    if (body.result === 0) {
                        res.status(401).json(body);
                    }
                    else
                        res.status(200).json(body);
                },
                function(error) {
                    var body = error.error;
                    switch (error.statusCode) {
                        case 500:
                            res.status(error.statusCode).json(body);
                            break;
                        default:
                            res.status(401).json(body);
                            break;
                    }

                }
            );
    });
};
