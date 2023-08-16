import React from 'react';
import { Modal } from 'antd'

const RenderContent = ({
  content: Content,
  variables
}) => {
  return <Content variables={variables}/>
}

const ModalBook = ({
  contentCard,
  isVisible,
  setIsVisible,
  className
}) => {

  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Modal
        title={contentCard?.title}
        visible={isVisible}
        className={className}
        onCancel={onCancel}
        footer={null}
      >
        {
          typeof contentCard?.content === 'string' ? 
          (
            <p>{contentCard?.content}</p>
          ) :
          (
            <RenderContent
              content={contentCard?.content}
              variables={contentCard?.variables}
            />
          )
        }
      </Modal>
    </>
  )

}

export default ModalBook;

