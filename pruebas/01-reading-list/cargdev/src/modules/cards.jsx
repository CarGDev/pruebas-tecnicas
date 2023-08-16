import React from 'react';
import Image from '../primitives/images';
import FootCard from '../clusters/footCard';
import CardContent from '../clusters/cardContent';
import HeaderCard from '../clusters/headerCard';

// Styles
import '../styles/modal.css';

const Cards = (props) => {
  const {
    variables,
    onClickImg
  } = props;

  const {
    content,
    index,
    className,
    isModal = false
  } = variables;

  const cardClassName = `${className}__card`

  return (
    <>
      <section
        key={`book-${index}`}
        className={cardClassName}
      >
        <section className='modal-img'>
          <Image
            src={content?.cover}
            className={isModal ? `${cardClassName}-img modal` : `${cardClassName}-img no-modal`}
            onClickImg={onClickImg}
            content={content}
          />
        </section>
        <section className='modal-content'>
          {
            isModal && 
            <>
              <HeaderCard
                content={content}
                className={cardClassName}
              />
              <CardContent
                content={content}
                className={cardClassName}
              />
              <FootCard
                array={content?.author?.otherBooks}
                className={`${cardClassName}-other-book`}
              />
            </>
          }
        </section>
      </section>
    </>
  )
}

export default Cards;
