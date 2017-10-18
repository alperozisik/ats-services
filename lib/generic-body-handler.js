const copy = require("../lib/copy");

module.exports = exports = genericBodyHandler;

function genericBodyHandler(body) {
    var body2 = copy(body);
    if (typeof body === "string") {
        try {
            body2 = JSON.parse(body);
        }
        catch (ex) {}
    }

    if (typeof body2.result === "string")
        body2.result = parseInt(body2.result, 10);
    if (body2.error === "null")
        body2.error = null;
    if (typeof body.errors === "undefined") {
        if (typeof body.error) {
            body.errors = [{ messages: [body.error] }];
        }
        else {
            body.errors = [];
        }
        delete body.error;
    }

    return body2;
}