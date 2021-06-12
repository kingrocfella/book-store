import { initialState, DISPATCH_TYPES } from './types';

export const listsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case DISPATCH_TYPES.BOOKS_SAVED:
      return { ...state, books: action.books };
    case DISPATCH_TYPES.BOOKS_SAVED_FROM_LIST:
      return {
        ...state,
        saved: [...state.saved, action.book],
      };
    case DISPATCH_TYPES.BOOK_REMOVED: {
      const indexToRemove = state.saved.findIndex(
        ({ id }) => id === action.book.id
      );
      state.saved.splice(indexToRemove, 1);
      return state;
    }
    case DISPATCH_TYPES.BOOK_ADDED:
      return {
        ...state,
        saved: [...state.saved, action.book],
      };
    default:
      return state;
  }
};
