/*globals HijriDate */
const genericBodyHandler = require("../lib/generic-body-handler");
const valueConverter = require("../lib/value-converter");
const reDate = /^([12]\d{3})-([01]?\d)-([0-3]?\d)$/;
require("hijri-date");

module.exports = function(service, connectorName, validate) {
    service.get('/mobile/custom/ats/appointment/:doctorId/:period/:date', validate, function(req, res) {
        var oracleMobile = req.oracleMobile;
        var resourceId = req.params.doctorId;
        var period = req.params.period;
        reDate.lastIndex = 0;
        var dateCapture = reDate.exec(req.params.date);
        var year = Number(dateCapture[1]);
        var month = Number(dateCapture[2]);
        var day = Number(dateCapture[3]);

        if (year < 1900) { //then it is hijri, need to convert
            let hjDate = new HijriDate(year, month, day);
            let gregDate = hjDate.toGregorian();
            year = gregDate.getFullYear();
            month = gregDate.getMonth() + 1;
            day = gregDate.getDate();
        }
        month = pad(month, 2);
        day = pad(day, 2);


        var slotDate = `${day}-${month}-${year}`;
        var lang = req.get("language") === "ar" ? 2 : 1;

        oracleMobile.connectors.get(connectorName, `serviceWS/getSlotTime/${resourceId}/${period}/${slotDate}/${lang}`)
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

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
