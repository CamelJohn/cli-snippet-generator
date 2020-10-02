const capitalize = require('./capitalize');
const cc = require('../components/classBased');
const fc = require('../components/functional');
const fs = require('fs');

module.exports = (path, type) => {
  let temp = path.split('/').slice(3);
  let component = capitalize(temp.pop());

  temp = temp.join('/');
  fs.mkdirSync(temp + '/' + component, { recursive: true });

  generateComponent(temp + '/' + component, component, type);
};

const generateComponent = (path, file, type) => {
  if (!fs.existsSync(file)) {
    fs.writeFile(`${path}/${file}.js`, `${type === 'fc' ? fc(file) : cc(file)}`, err => {
        if (err) console.log(err);
      });
    fs.writeFile(`${path}/${file}.module.css`, ``, err => {
      if (err) console.log(err);
    });

    console.log(`created ${file} Folder`)
    console.log(`created ${file}.js File`)
    console.log(`created ${file}.module.css File`)
  } else {
    console.log(`[Error]: Component ${path}.js already exists.`);
  }
}
