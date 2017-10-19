const genericBodyHandler = require("../lib/generic-body-handler");
const valueConverter = require("../lib/value-converter");
const reYearMonth = /^(2\d{3})-([0-3]\d)$/;
const companyId = 1;

module.exports = function(service, connectorName, validate) {
    service.get('/mobile/custom/ats/appointment/available/:clinicNo/:doctorId/:yearMonth', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var clinicNo = req.params.clinicNo;
        var resourceId = req.params.doctorId;
        var doctorId = null;
        reYearMonth.lastIndex = 0;
        var yearMonth = reYearMonth.exec(req.params.yearMonth);
        var year = Number(yearMonth[1]);
        var month = Number(yearMonth[2]);

        oracleMobile.connectors.get(connectorName, `serviceWS/getDoctorOfDepartments/${companyId}/${clinicNo}/1`)
            .then(
                function(result) {
                    var doctors = genericBodyHandler(result.result);

                    for (let d in doctors) {
                        let doc = doctors[d];
                        if (doc.resourceId == resourceId) {
                            doctorId = doc.staffId;
                            break;
                        }
                    }
                    if (doctorId) {
                        proceedAppointmentCount();
                    }
                    else {
                        res.status(404).json({
                            result: 0,
                            errors: ["Cannot obtain staffId from resourceId for doctors"]
                        });
                    }
                },
                function(error) {
                    var body = genericBodyHandler(error.error);
                    res.status(error.statusCode).json(body);
                }
            );

        function proceedAppointmentCount() {
            oracleMobile.connectors.get(connectorName, `serviceWS/getAppointmentCount/${companyId}/${clinicNo}/${doctorId}/${year}/${month}`)
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
        }
    });
};
