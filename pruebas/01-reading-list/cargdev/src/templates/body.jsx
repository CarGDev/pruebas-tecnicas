import React from 'react';
import CardBooks from '../modules/cardBook';

const LibraryPage = (props) => {

  return(
    <>
      <section>
        <CardBooks {...props}/>
      </section>
    </>
  )
}

export default LibraryPage

