import React from 'react';
import Text from '../primitives/text';

const FootCard = ({
  array,
  className,
}) => {
  return(
    <>
      <section className='footer-modal'>
        <h4 className='footer-modal__title'>
          other titles
        </h4>
        <section>
          {array?.map((otherBook, ind) => {
              return(
                <>
                  <li key={`other-book-${ind}`}>
                    <Text
                      className={className}
                      text={otherBook}
                    />
                  </li>
                </>
              )
            })
          }
        </section>
      </section>
    </>
  )
}

export default FootCard;


