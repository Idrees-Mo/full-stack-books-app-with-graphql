import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { getBooks } from './queries/queries'
import BookDetail from './BookDetail';

const BooksList = () => {
  const [id, setId] = useState('')
  const { loading, error, data } = useQuery(getBooks);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data.books.map(book => <li key={book.id} onClick={(e) => setId(book.id)}>{book.title}</li>)}
      <h3>Book's Detail</h3>
      <BookDetail id={id} />
    </>
  )
}

export default BooksList