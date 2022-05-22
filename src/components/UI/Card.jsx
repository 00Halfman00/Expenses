import React from 'react';

function Card(props) {
  //console.log('Card: ', React);
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
