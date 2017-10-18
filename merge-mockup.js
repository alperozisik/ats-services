const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const excludeFileNames = ["package.json", "toolsConfig.json"];
const mockupPathName = "mockup";
const mockupPath = path.join(__dirname, mockupPathName);

const filterFunc = (src, dest) => {
    let srcPath = path.parse(src);
    let result = excludeFileNames.indexOf(srcPath.base) === -1;
    return result;
};

fse.copy(mockupPath, __dirname, { filter: filterFunc }, err => {
    if (err) return console.error(err);
    updateToolsConfig();
});

function updateToolsConfig() {
    const toolsConfigBase = require("./toolsConfig-base.json");
    const toolsConfigMockup = require(path.join(mockupPath, "toolsConfig.json"));
    var newToolsConfig = Object.assign({},
        toolsConfigBase, {
            tests: toolsConfigMockup.tests
        }
    );
    var newToolsConfigFileContent = JSON.stringify(newToolsConfig, null, "\t");
    fs.writeFile(path.join(__dirname, "toolsConfig.json"), newToolsConfigFileContent,
        "utf8", (err) => {
            if (err) return console.error(err);
            console.log("Merge finished");
        }
    );
}
