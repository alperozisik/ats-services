const genericBodyHandler = require("../lib/generic-body-handler");

module.exports = function(service, connectorName, validate) {
    service.post('/mobile/custom/ats/patient/login', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var password = req.body.password;
        var nickname = req.body.username;
        var token = req.body.notificationToken || "";
        var osCode = req.body.deviceType === "iOS" ? 1 : 2;
        var tryCount = 0;
        tryRequest();

        function tryRequest() {
            tryCount++;
            switch (tryCount) {
                case 1:
                    return try1();
                case 2:
                    return try2();
                default:
                    return false;
            }
        }

        function try1() {

            oracleMobile.connectors.get(connectorName, `loginWS/login/1/${password}/${nickname}/${token}/${osCode}`)
                .then(success, failure);
            return true;
        }

        function try2() {

            oracleMobile.connectors.get(connectorName, `loginWS/login/1/${password}/${nickname}//${osCode}`)
                .then(success, failure);
            return true;
        }

        function success(result) {
            var body = genericBodyHandler(result.result);
            if (body.result === 0) {
                failure(result);
            }
            else
                res.status(200).json(body);
        }

        function failure(error) {
            if (tryRequest())
                return;
            var body = error.error || error.body;
            switch (error.statusCode) {
                case 500:
                    res.status(error.statusCode).json(body);
                    break;
                default:
                    res.status(401).json(body);
                    break;
            }
        }
    });
};
