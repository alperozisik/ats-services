const connectorName = "atscareware";
const validation = require("../validation");
const validate = require('express-validation');

module.exports = function(service) {
    const fs = require("fs");
    const path = require("path");
    const startPath = __dirname;
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var file = path.parse(files[i]);
        if (file.ext !== ".js")
            continue;
        if (file.name === "index")
            continue;
        require(`./${file.name}`)(service, connectorName, validate(validation[file.name]));
    }
};
