import { gql } from '@apollo/client';

export const getBooks = gql`{
  books{
    title,
    id
  }
}
`;

export const getBookDetail = gql`
  query($id:ID!){
    book(id:$id){
      title,
      author{
        name,
        id,
        books{
          title,
          id
        }
      }
    }
  }`;
