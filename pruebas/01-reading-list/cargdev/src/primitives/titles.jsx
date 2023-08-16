import React from 'react';

const Titles = (props) => {
  const {
    title,
    className
  } = props;

  return (
    <>
      <h2 className={className}>
        {title}
      </h2>
    </>
  )
}

export default Titles;
