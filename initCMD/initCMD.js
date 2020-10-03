const { fgb, Reset } = require('../colors/colors');

module.exports = (cmd) => {
  
  if (cmd !== 'g') {
    console.log(`${fgb.Red}failed${Reset} '${fgb.Cyan}${cmd}${Reset}' is an unrecognized command.`);
    process.exit(1);
  }
};
