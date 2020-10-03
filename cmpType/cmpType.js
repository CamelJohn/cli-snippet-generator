const error = require('./cmpTypeError');

module.exports = type => {
  if (type !== 'fc' && type !== 'cc' && type !== 'f') {
    error(type);
    process.exit(1);
  }
}