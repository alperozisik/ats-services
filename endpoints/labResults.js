const valueConverter = require("../lib/value-converter");
const genericBodyHandler = require("../lib/generic-body-handler");
const companyId = 1;

module.exports = function(service, connectorName, validate) {

    service.get('/mobile/custom/ats/lab/results/:orderNo', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var lang = req.get("language") === "ar" ? 2 : 1;
        var orderNo = req.params.orderNo;
        oracleMobile.connectors.get(connectorName, `serviceWS/getLabTimeLine/${companyId}/${orderNo}/${lang}`)
            .then(
                function(result) {
                    var body = genericBodyHandler(result.result);
                    body.forEach((item) => { valueConverter(item) });
                    res.status(200).json(body);
                },
                function(error) {
                    var body = genericBodyHandler(error.error);
                    res.status(error.statusCode).json(body);
                }
            );
    });

};
