const error = require('./cmpTypeError');

module.exports = type => {
  if (type !== 'fc' && type !== 'cc') {
    error(type);
    process.exit(1);
  }
}