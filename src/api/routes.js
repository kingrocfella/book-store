export const API_ROUTES = {
  getBookNames() {
    return `/lists/names.json?api-key=${process.env.REACT_APP_API_KEY}`;
  },
  getBookLists(list) {
    return `/lists/${list}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  },
};
