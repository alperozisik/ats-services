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
    exports[file.name] = require(`./${file.name}`);
}
