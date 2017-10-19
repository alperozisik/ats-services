const connectorName = "atscareware";

module.exports = function(service) {
    const endpoints = [
        "login",
        "patient"
    ];
    
    endpoints.forEach(item => require(`./${item}`)(service, connectorName));
};
