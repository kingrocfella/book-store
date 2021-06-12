export const PAGE_ROUTES = {
  saved() {
    return `/saved`;
  },
  savedbookdetail() {
    return `saved/:bookId`;
  },
  home() {
    return `/*listName`;
  },
  bookdetail(id) {
    return `/books/${id ?? ':bookId'}`;
  },
  addbook() {
    return `/books/new`;
  },
};
