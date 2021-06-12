import { DISPATCH_TYPES } from '../reducers/types';
import { addBook, removeBook } from './books';

const data = { title: 'A book', author: 'Someone' };
describe('addBook()', () => {
  it('should create an add book action', () => {
    expect(addBook(data)).toEqual({
      type: DISPATCH_TYPES.BOOK_ADDED,
      book: data,
    });
  });
});

describe('removeBook()', () => {
  it('should create a remove book action', () => {
    expect(removeBook(data)).toEqual({
      type: DISPATCH_TYPES.BOOK_REMOVED,
      book: data,
    });
  });
});
