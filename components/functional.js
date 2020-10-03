module.exports = (cmp) => {
  return `import React, { Component } from 'react';

import classes from './${cmp}.module.css';

class ${cmp} extends Component {
  render () {
    return <div className={classes.${cmp}}></div>
  }
}
export default ${cmp};`
}