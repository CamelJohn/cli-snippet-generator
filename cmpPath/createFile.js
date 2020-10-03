const fs = require('fs')
const { fgb, Reset } = require('../colors/colors');

module.exports = file => {
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file);

    console.log(`${fgb.Green}created${Reset} ${file} Folder`)
  } else {
    console.log(`${fgb.Red}failed${Reset} Folder ${fgb.Cyan}${file}${Reset} already exists.`);
  }
}