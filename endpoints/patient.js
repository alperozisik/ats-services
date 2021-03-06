const genericBodyHandler = require("../lib/generic-body-handler");
const companyId = 1;
module.exports = function(service, connectorName, validate) {


    service.get('/mobile/custom/ats/patient/:patientId', validate, function(req, res) {
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
                    var body = genericBodyHandler(error.error);
                    res.status(error.statusCode).json(body);
                }
            );
    });

};
