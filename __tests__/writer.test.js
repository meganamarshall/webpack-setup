const fs = require('fs');
const { writeJSON } = require('../src/writer');

fs.writeFileSync = jest.fn();

describe('writer functions', () => {
  it('writes json file', () => {
    const obj = {
      name: 'megan'
    };
    const path = './test.json';
    writeJSON(obj, path);
    expect(fs.writeFileSync).toBeCalledWith(path, JSON.stringify(obj, null, 2), 'utf8');
  });
});
