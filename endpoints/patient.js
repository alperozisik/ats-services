module.exports = function(service, connectorName) {
    const validation = require("../validation");
    const validate = require('express-validation');
    const genericBodyHandler = require("../lib/generic-body-handler");
    const companyId = 1;
    
    service.get('/mobile/custom/ats/patient/:patientId', validate(validation.patient), function(req, res) {
        var oracleMobile = req.oracleMobile;
        var patientId = req.params.patientId;
        var lang = req.get("language") === "ar" ? 2 : 1;
        oracleMobile.connectors.get(connectorName, `serviceWS/getPatientInfo/${companyId}/${patientId}/${lang}`)
            .then(
                function(result) {
                    var body = genericBodyHandler(result.result);
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
