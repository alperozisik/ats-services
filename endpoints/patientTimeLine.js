const pageLengthByService = 5;
const valueConverter = require("../lib/value-converter");
const genericBodyHandler = require("../lib/generic-body-handler");
module.exports = function(service, connectorName, validate) {

    /*service.get('/mobile/custom/ats/patient/:patientId/timeline', function(req, res) {
        var result = {};
        var statusCode = 200;
        if (statusCode == 200) {
            var acceptType = req.accepts(['application/json']);
            if (acceptType == 'application/json') {
                result = {
                    "errors": [],
                    "items": [{
                            "actionDate": "2014-09-03 00:00:00",
                            "actionTime": "08:00 AM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Magdy Abdul Raof Al Sabea",
                            "doctorName_ar": "مجدي عبد الرؤف السبع",
                            "doctorName_en": "Magdy Abdul Raof Al Sabea",
                            "orderNo": null,
                            "paging": "1",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12489",
                            "status": "1",
                            "tempNo": null
                        },
                        {
                            "actionDate": "2014-09-17 00:00:00",
                            "actionTime": "01:00 PM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Hani Ali Mohammed Omar",
                            "doctorName_ar": "هاني علي محمد عمر",
                            "doctorName_en": "Hani Ali Mohammed Omar",
                            "orderNo": null,
                            "paging": "2",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12513",
                            "status": "1",
                            "tempNo": null
                        },
                        {
                            "actionDate": "2015-08-29 00:00:00",
                            "actionTime": "08:00 AM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Samar  Samar",
                            "doctorName_ar": "سمر  سمر",
                            "doctorName_en": "Samar  Samar",
                            "orderNo": null,
                            "paging": "3",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12710",
                            "status": "1",
                            "tempNo": null
                        },
                        {
                            "actionDate": "2015-10-26 00:00:00",
                            "actionTime": "12:30 PM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Hani Ali Mohammed Omar",
                            "doctorName_ar": "هاني علي محمد عمر",
                            "doctorName_en": "Hani Ali Mohammed Omar",
                            "orderNo": null,
                            "paging": "4",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12730",
                            "status": "6",
                            "tempNo": null
                        },
                        {
                            "actionDate": "2015-12-06 00:00:00",
                            "actionTime": "10:00 AM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Hani Ali Mohammed Omar",
                            "doctorName_ar": "هاني علي محمد عمر",
                            "doctorName_en": "Hani Ali Mohammed Omar",
                            "orderNo": null,
                            "paging": "5",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12753",
                            "status": "6",
                            "tempNo": null
                        },
                        {
                            "actionDate": "2016-02-23 00:00:00",
                            "actionTime": "02:30 PM",
                            "categoryCode": "10",
                            "categoryDesc": "Appointment",
                            "categoryDesc_ar": "????",
                            "categoryDesc_en": "Appointment",
                            "companyId": "1",
                            "doctorName": "Rana Adnan Dwai",
                            "doctorName_ar": "رانا عدنان دواي",
                            "doctorName_en": "Rana Adnan Dwai",
                            "orderNo": null,
                            "paging": "6",
                            "patientId": "21212",
                            "sectionName": null,
                            "sectionName_ar": null,
                            "sectionName_en": null,
                            "serialNo": "12810",
                            "status": "1",
                            "tempNo": null
                        }
                    ],
                    "page": 1,
                    "result": 1
                };
            }
        }
        res.status(statusCode).send(result);
    });*/
    service.get('/mobile/custom/ats/patient/:patientId/timeline', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var patientId = req.params.patientId;
        var lang = req.get("language") === "ar" ? 2 : 1;
        var page = req.query.page || 1;
        var pageFrom = ((page - 1) * pageLengthByService) + 1;
        oracleMobile.connectors.get(connectorName, `serviceWS/getTimeLine/${patientId}/${pageFrom}`)
            .then(
                function(result) {
                    var body = genericBodyHandler(result.result);
                    var response = {
                        errors: [],
                        items: body,
                        page: page,
                        result: 1
                    };
                    response.items.forEach((item) => {
                        valueConverter(item);
                        languageConverter(item, lang, "categoryDesc", "doctorName", "sectionName");
                    });

                    res.status(200).json(response);
                },
                function(error) {
                    var body = genericBodyHandler(error.error);
                    res.status(error.statusCode).json(body);
                }
            );
    });

};




function languageConverter(target, selectedLanguage, ...fields) {
    fields.forEach((field) => {
        let ar = target[field + "0"];
        let en = target[field];
        delete target[field + "0"];
        target[field + "_ar"] = ar;
        target[field + "_en"] = en;
        if (selectedLanguage === "ar") {
            target[field] = ar;
        }
    });
}
