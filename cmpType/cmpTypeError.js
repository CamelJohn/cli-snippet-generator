const { Reset, fgb } = require('../colors/colors');

module.exports = (type) => {
  let message = `${fgb.Red}failed${Reset} '${fgb.Cyan}${type}${Reset}' is an unrecognized component type.`;
  
  if (type.includes('fc')) {
    message = (message + `\nDid you mean '${fgb.Cyan}fc${Reset}' (stands for functional component) ?`);
  }

  if (type.includes('cc')) {
    message = (message + `\n[Did you mean '${fgb.Cyan}cc${Reset}' (stands for class based component) ?`);
  }

  console.log(message);
  process.exit(1);
};
