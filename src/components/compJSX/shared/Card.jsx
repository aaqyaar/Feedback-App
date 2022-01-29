import React from 'react';
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}
Card.defaultProps = {
    reverse: false,
}
Card.propTypres = {
    children: PropTypes.number.isRequired
}


export default Card;


// conditional style
// style={{
//     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
//     color: reverse ? '#fff' : '#000'
//   }}