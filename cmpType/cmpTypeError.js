const { FgRed, Reset, FgCyan, FgBlue } = require('../colors/colors');

module.exports = (type) => {
  let message = `[${FgRed}Error${Reset}]: '${FgBlue}${type}${Reset}' is not a recognized component type.`;
  
  if (type.includes('fc')) {
    message = (message + `\n[${FgCyan}Hint${Reset}]: Did you mean '${FgBlue}fc${Reset}' (stands for functional component) ?`);
  }

  if (type.includes('cc')) {
    message = (message + `\n[${FgCyan}Hint${Reset}]: Did you mean '${FgBlue}cc${Reset}' (stands for class based component) ?`);
  }

  console.log(message);
  process.exit(1);
};
