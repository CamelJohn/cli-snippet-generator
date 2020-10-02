module.exports = (cmp) => {
  return `import React, { Component } form 'react';

import classes from './${cmp}.module.css';

class ${cmp} extends Component {
  render () {
    return <div></div>
  }
}
export default ${cmp};`
}