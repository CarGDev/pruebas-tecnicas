import { useState } from 'react';
import { exportAllBooks } from './gettingInitialBooks';

const AllProps = () => {

  const [books, setBooks] = useState(exportAllBooks)

  return {
    books,
    setBooks
  }

};

export default AllProps;
