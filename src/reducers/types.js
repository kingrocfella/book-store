export const DISPATCH_TYPES = {
  BOOKS_SAVED: 'books_saved',
  BOOK_ADDED: 'book_added',
  BOOKS_SAVED_FROM_LIST: 'book_saved_from_list',
  BOOK_REMOVED: 'book_removed',
};

export const initialState = {
  books: [],
  saved: [],
};
