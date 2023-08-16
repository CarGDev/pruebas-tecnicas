import React from 'react';
import Text from '../primitives/text';

const CardContent = ({
  content,
  className
}) => {
  return(
    <>
      <section className='content-modal'>
        <Text
          className={`${className}-synopsis`}
          text={content?.synopsis}
        />
        <Text
          className={`${className}-year`}
          text={`Year: ${content?.year}`}
        />
        <Text
          className={`${className}-ISBN`}
          text={`ISBN: ${content?.ISBN}`}
        />
        <Text
          className={`${className}-author-name`}
          text={`Author: ${content?.author?.name}`}
        />
      </section>
    </>
  )
}

export default CardContent;
