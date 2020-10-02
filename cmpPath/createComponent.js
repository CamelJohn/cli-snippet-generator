const cc = require('../components/classBased');
const fc = require('../components/functional');
const fs = require('fs');

const capitalize = require("./capitalize");

module.exports = (path, type) => {
  let file = capitalize(path);
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file);
    fs.writeFile(`${file}/${file}.js`, `${type === 'fc' ? fc(file) : cc(file)}`, err => {
        if (err) console.log(err);
      });
    fs.writeFile(`${file}/${file}.module.css`, ``, err => {
      if (err) console.log(err);
    });
    console.log(`created ${file} Folder`)
    console.log(`created ${file}.js File`)
    console.log(`created ${file}.module.css File`)
  } else {
    console.log(`[Error]: Component ${path}.js already exists.`);
  }
}