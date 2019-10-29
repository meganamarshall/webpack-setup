const fs = require('fs');


const writer = (str, path) => {
  fs.writeFileSync(path, str, 'utf8');
};

const writeJSON = (obj, path) => {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2), 'utf8');
};

module.exports = {
  writer,
  writeJSON
};
