import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, type, version, isDisabled, }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  );
};

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false
}
Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
}
export default Button;
