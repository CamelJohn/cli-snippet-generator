const { fgb, Reset } = require('../colors/colors.js');
const createComponent = require('./createComponent');
const createNestedComponent = require('./createNestedComponent');
const createFile = require('./createFile.js');
const createNestedFile = require('./createNestedFile.js');

module.exports = async (path, type) => {
  if (type === 'f') {
    if (path.includes('//')) {
      console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
      process.exit(1);
    }

    if (!path.includes('/')) {
      createFile(path, type)
    } else {
      createNestedFile(path, type);
    }
  } else {
    if (path.includes('//')) {
      console.log(`${fgb.Red}failed${Reset} path contains illegal section: '${fgb.Magenta}//${Reset}'.`);
      process.exit(1);
    }

    // check if is single component
    if (!path.includes('/')) {
      createComponent(path, type)
    } else {
      createNestedComponent(path, type);
    }
  }
};


