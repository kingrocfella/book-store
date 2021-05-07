import React from 'react';
import PropTypes from 'prop-types';
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
  const { actions, saved } = props;
  return (
    <>
      <Banner />
      <Router>
        <Overview {...props} path="/*listName" />
        <BookDetails {...props} path="books/:bookId" />

        <Bookshelf books={saved} actions={actions} saved={saved} path="saved" />
        <BookDetails actions={actions} books={saved} path="saved/:bookId" />

        <AddBook actions={actions} path="books/new" />
      </Router>
    </>
  );
}

App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  saved: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators({ ...listActions, ...bookActions }, dispatch),
  })
)(App);
