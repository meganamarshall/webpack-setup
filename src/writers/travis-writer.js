const { writer } = require('../writer');


const travis = `language: node_js
node_js: node`;

const travisWriter = path => {
  return writer(travis, path);
};

module.exports = travisWriter;
