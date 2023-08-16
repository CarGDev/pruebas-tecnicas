import React from 'react';

const Image = ({
  src,
  className,
  onClickImg = () => {},
  content
}) => {
  return(
    <>
      <div 
        className={className}
        onClick={() => onClickImg(content)}
      >
        <img src={src}/>
      </div>
    </>
  )
}

export default Image
