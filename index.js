module.exports = exports = function(service) {
    const atsMockup = require("./ats");
    const endPoints = require("./endpoints");

    const pickEndpoints = require("./lib/pick-endpoints");

    service.use(function(err, req, res, next) {
        if (typeof err === "object" && err.status === 400 && err.statusText && err.errors) {
            res.status(err.status).json(err);
        }
        else
            next(err);
    });

    pickEndpoints(service, endPoints, atsMockup);
};
