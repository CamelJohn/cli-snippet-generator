const capitalize = require('./capitalize');
const cc = require('../components/classBased');
const fc = require('../components/functional');
const sc = require('../components/style');
const fs = require('fs');
const { fgb, Reset } = require('../colors/colors');

module.exports = (path, type) => {
  let temp = path.split('/');    
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
    fs.writeFile(`${path}/${file}.module.css`, `${sc(file)}`, err => {
      if (err) console.log(err);
    });

    console.log(`${fgb.Green}created${Reset} ${file} Folder`);
    console.log(`${fgb.Green}created${Reset} ${file}.js File`);
    console.log(`${fgb.Green}created${Reset} ${file}.module.css File`);
  } else {
    console.log(`${fgb.Red}failed${Reset} Component ${fgb.Cyan}${capitalize(path)}${Reset} already exists.`);
  }
}
