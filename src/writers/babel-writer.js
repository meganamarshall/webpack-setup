const { writeJSON } = require('../writer');

const babel = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  'plugins': [
    '@babel/plugin-proposal-class-properties'
  ]
};

const babelWriter = path => {
  return writeJSON(babel, path);
};

module.exports = babelWriter;
