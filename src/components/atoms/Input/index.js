import React from 'react';
import './styles.scss';

function Index({ password, error, className, borderBottom, ...props }) {
  const [showPassword, setShowPassword] = React.useState(false);
  let classNameFinal = `atom-input`;

  if (error) {
    classNameFinal += ' atom-input--error';
  }

  if (borderBottom) {
    classNameFinal += ' atom-input--border-bottom';
  }

  if (className) {
    classNameFinal += ` ${className}`;
  }

  const Element = <input className={classNameFinal} {...props} />;

  if (password) {
    <div>
      {Element}
      <img onClick={() => setShowPassword(!showPassword)} alt="icon-input" {...props} />
    </div>;
  }
  return <>{Element}</>;
}

export default Index;
