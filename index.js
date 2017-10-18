module.exports = exports = function(service) {
    const atsMockup = require("./ats");
    const endPoints = require(".endpoints");
    
    const pickEndpoints = require("./lib/pick-endpoints");
    
    pickEndpoints(service, endPoints, atsMockup);
};