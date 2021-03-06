import React from 'react'
import { useQuery } from '@apollo/client';
import { getBookDetail } from './queries/queries'

const BookDetail = ({ id }) => {
  const { loading, error, data } = useQuery(getBookDetail, {
    variables: { id },
  });

  if (loading) return <>loading</>;

  return (
    data ?
      <div className="detail">
        <h1>{data.book.title}</h1>
        <h3>{data.book.author.name}</h3>
        <h4>Others book by {data.book.author.name}</h4>
        <ul>
          {data.book.author.books.map(book => <li key={book.id}>{book.title}</li>)}
        </ul>
      </div > : null
  )
}

export default BookDetail