module.exports = (cmp) => {
  return `import React from 'react';

import classes from './${cmp}.module.css';

const ${cmp} = props => {
  return <div className={classes.${cmp}}></div>;
};

export default ${cmp};`
}