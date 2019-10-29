const fs = require('fs');

const depsInstaller = require('./installers/dependencies-installer');
const devDepsInstaller = require('./installers/dev-dependencies-installer');
const babelWriter = require('./writers/babel-writer');
const eslintWriter = require('./writers/eslint-writer');
const gitignoreWriter = require('./writers/gitignore-writer');
const packageJsonWriter = require('./writers/package-json-writer');
const { indexHtmlWriter, indexJsWriter } = require('./writers/src-index-writer');
const travisWriter = require('./writers/travis-writer');
const webpackWriter = require('./writers/webpack-writer');

const currentPath = process.argv[process.argv.length - 1];

if(currentPath !== '.') {
  fs.mkdirSync(currentPath);
}

fs.mkdirSync(`${currentPath}/src`);

packageJsonWriter(`${currentPath}/package.json`);
depsInstaller(currentPath);
devDepsInstaller(currentPath);
babelWriter(`${currentPath}/.babelrc`);
eslintWriter(`${currentPath}/.eslintrc`);
gitignoreWriter(`${currentPath}/.gitignore`);
indexHtmlWriter(`${currentPath}/src/index.html`);
indexJsWriter(`${currentPath}/src/index.js`);
travisWriter(`${currentPath}/.travis.yml`);
webpackWriter(`${currentPath}/webpack.config.js`);


