import React from 'react';
import { Router } from '@reach/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from './actions/lists';
import * as bookActions from './actions/books';

import Bookshelf from './components/Bookshelf';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import Banner from './components/Banner';
import Overview from './Overview';
import './App.css';

export function App(props) {
  return (
    <>
      <Banner />
      <Router>
        <Overview {...props} path="/*listName" />
        <BookDetails {...props} path="books/:bookId" />

        <Bookshelf {...props} path="saved" />
        <BookDetails {...props} path="saved/:bookId" />

        <AddBook {...props} path="books/new" />
      </Router>
    </>
  );
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators({ ...listActions, ...bookActions }, dispatch),
  })
)(App);
