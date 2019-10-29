const { writer } = require('../writer');

const gitignore = 'node_modules';

const gitignoreWriter = path => {
  return writer(gitignore, path);
};

module.exports = gitignoreWriter;
