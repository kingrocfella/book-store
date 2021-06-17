import { DISPATCH_TYPES } from '../reducers/types';

export const saveBooks = booksArr => dispatch =>
  dispatch({
    type: DISPATCH_TYPES.BOOKS_SAVED,
    books: booksArr,
  });

export const saveBookFromList = book => dispatch => {
  const newBook = {
    id: book?.primary_isbn13,
    title: book?.title,
    author: book?.author,
    image_url: book?.book_image,
    description: book?.description,
  };
  dispatch({ type: DISPATCH_TYPES.BOOKS_SAVED_FROM_LIST, book: newBook });
};
