const { FgRed, Reset, FgBlue } = require('../colors/colors');

module.exports = (cmd) => {
  
  if (cmd !== 'g') {
    console.log(`[${FgRed}Error${Reset}]: '${FgBlue}${cmd}${Reset}' is an unrecognized command.`);
    process.exit(1);
  }
};
