import React from 'react';
import Text from '../primitives/text';

const HeaderCard = ({
  content,
  className
}) => {
  return(
    <>
      <section className='header-modal'>
        <Text
          className={`${className}-genre`}
          text={`Genre: ${content?.genre}`}
        />
        <Text
          className={`${className}-pages`}
          text={`Pages: ${content?.pages}`}
        />
      </section>
    </>
  )
}

export default HeaderCard;
