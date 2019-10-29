const installer = require('../installer');

const deps = [
  'react',
  'react-dom'
];

const depsInstaller = path => {
  deps.forEach(dep => {
    return installer(path, `npm i ${dep}`)
  });
};

module.exports = depsInstaller;
