'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');

const nodeDir = require('node-dir');

const configFilePath = path.resolve(__dirname, 'translate.config.json');
const config = require(configFilePath);

let resources = config.languages.reduce((aggregate, lang) => {
    aggregate[lang] = {};
    return aggregate;
}, {});

const currentDir = process.cwd();

let appDir = path.resolve(currentDir, config.appDir);
if (!fs.existsSync(appDir)) {
    throw new Error(`The app directory '${appDir}' does not exist. Ensure that your config is correct and you are executing the tool from the root directory of the repo.`);
}

const modules = nodeDir.files(appDir, 'dir', null, {
    sync: true,
    shortName: true,
    recursive: false
});

const filePattern = new RegExp(`\\.${config.languages.join('|')}\\.json$`);
const fileNamePattern = new RegExp(`^([\\w-]+)\\.(${config.languages.join('|')})\\.json$`);

for (let i = 0; i < modules.length; i++) {
    let module = modules[i];
    let alias = config.modules[module] || module;

    let moduleResources = config.languages.reduce((aggregate, lang) => {
        aggregate[lang] = {};
        resources[lang][alias] = aggregate[lang];
        return aggregate;
    }, {});


    const moduleDir = path.resolve(appDir, module);
    let resourceFiles = nodeDir.files(moduleDir, 'file', null, { sync: true })
        .filter(f => f.match(filePattern));

    resourceFiles.forEach(file => {
        let fileName = path.basename(file);
        let match = fileNamePattern.exec(fileName);

        let language = match[2];
        let componentName = match[1];
        moduleResources[language][componentName] = require(file);
    });
}

config.languages.forEach(lang => {
    let resource = JSON.stringify(resources[lang], null, 4);
    config.outputs[lang].forEach(outFile => {
        fs.writeFileSync(outFile, resource, 'utf8');
    });
});
