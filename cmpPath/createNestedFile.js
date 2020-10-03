const fs = require('fs');
const { fgb, Reset } = require('../colors/colors');

module.exports = (file) => {  
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file, { recursive: true});

    console.log(`${fgb.Green}created${Reset} ${file} Folder Chain (& folder).`)
  } else {
    console.log(`${fgb.Red}failed${Reset} Folder (& chain) ${fgb.Cyan}${file}${Reset} already exist.`);
  }
};