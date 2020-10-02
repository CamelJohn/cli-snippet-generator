const { FgRed, Reset, FgMagenta } = require('../colors/colors.js');
const createComponent = require('./createComponent');
const createNestedComponent = require('./createNestedComponent');

module.exports = async (path, type) => {
  if (path.includes('//')) {
    console.log(`[${FgRed}Error${Reset}]: path contains illegal section: '${FgMagenta}//${Reset}.'`);
    process.exit(1);
  }

  // check if is single component
  if (!path.includes('/')) {
    // check if component exists already
    createComponent(path, type)
  } else {
    createNestedComponent(path, type);
  }
};


