const connectorName = "atscareware";

module.exports = function(service) {
    const endpoints = [
        "login"
    ];
    
    endpoints.forEach(item => require(`./${item}`)(service, connectorName));
};
