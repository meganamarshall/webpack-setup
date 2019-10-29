const { execSync } = require('child_process');

const installer = (path, command) => {
  console.log('installer has started');
  execSync(command, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('installer has finished');
};

module.exports = installer;
