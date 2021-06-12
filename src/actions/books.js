import { DISPATCH_TYPES } from '../reducers/types';

export const addBook = book => dispatch => {
  dispatch({
    type: DISPATCH_TYPES.BOOK_ADDED,
    book,
  });
};

export const removeBook = book => dispatch => {
  dispatch({
    type: DISPATCH_TYPES.BOOK_REMOVED,
    book,
  });
};
