import React, { useState } from 'react';
import Cards from './cards';
import ModalBook from '../modules/modal';
import Title from '../primitives/titles';
import { Row, Col } from 'antd';
// Styles
import '../styles/cards.css';

let contentVariables = {};
let contentIndex = {};

const CardBooks = (props) => {

  const {
    books,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [contentCard, setContentCard] = useState({
    content: Cards,
    title: '',
  });
  const className = 'card-books';

  const onClickImg = (content) => {
    setIsVisible(true);
    setContentCard(data => ({
      ...data,
      title: <Title
        title={content?.title}
        className={`${className}__card-title`}
      />,
      variables: {
        content: contentVariables[content?.title],
        index: contentIndex[content?.title],
        className: 'card-books',
        isModal: true
      }
    }));
  };

  return (
    <>
      <ModalBook
        contentCard={contentCard}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        className='card-books-modal'
      />
      <div id='card-books' className='card-books'>
        <Row className='card-books__row' gutter={[16, 16]}>
          {books?.library?.map((book, index) => {
            const content = book?.book;
            contentVariables[book?.book?.title] = book?.book;
            contentIndex[book?.book?.title] = index;
            return (
              <>
                <Col span={4}>
                  <Cards
                    variables={{
                      content,
                      index,
                      className: className
                    }}
                    onClickImg={onClickImg}
                  />
                </Col>
              </>
            )
          })}
        </Row>
      </div>
    </>
  );
};

export default CardBooks;
