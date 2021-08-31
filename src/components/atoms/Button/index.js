import React from 'react';

import './styles.scss';

function Index({ children, onClick, size, appearance, color, disabled, block, className, ...props }) {
  const getSize =
    (size || '').toLocaleLowerCase() === 'large'
      ? 'atom-button--large'
      : (size || '').toLocaleLowerCase() === 'small'
      ? 'atom-button--small'
      : 'atom-button--medium';

  const getApperiance =
    (appearance || '').toLocaleLowerCase() === 'outline' ? 'atom-button--outline' : 'atom-button--primary';

  const getColor =
    (color || '').toLocaleLowerCase() === 'white'
      ? 'atom-button--white'
      : (color || '').toLocaleLowerCase() === 'blue'
      ? 'atom-button--blue'
      : (color || '').toLocaleLowerCase() === 'green'
      ? 'atom-button--green'
      : '';

  let classNameFinal = `atom-button ${getSize} ${getApperiance}`;

  if (getColor) {
    classNameFinal += ` ${getColor}`;
  }

  if (block) {
    classNameFinal += ' atom-button--block';
  }

  if (className) {
    classNameFinal += ` ${className}`;
  }
  return (
    <React.Fragment>
      <button onClick={onClick} disabled={disabled} className={classNameFinal} {...props}>
        {children}
      </button>
    </React.Fragment>
  );
}

export default Index;
